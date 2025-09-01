'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { rewriteSectionAction } from './actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  sectionContent: z.string().min(50, {
    message: 'Please enter at least 50 characters for a better result.',
  }),
  tone: z.string(),
  persona: z.string(),
  keywords: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type RewriteResult = {
  success: boolean;
  data?: { rewrittenContent: string };
  error?: string;
};

export default function RewriterForm() {
  const [rewrittenContent, setRewrittenContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sectionContent: '',
      tone: 'Professional',
      persona: 'Software Engineer',
      keywords: '',
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      setIsLoading(true);
      setRewrittenContent(null);
      const result: RewriteResult = await rewriteSectionAction(values);

      if (result.success && result.data) {
        setRewrittenContent(result.data.rewrittenContent);
        toast({
          title: 'Success!',
          description: 'Your resume section has been rewritten.',
        });
      } else {
        throw new Error(result.error || 'Failed to rewrite content.');
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Oh no! Something went wrong.',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Input Your Content</CardTitle>
          <CardDescription>
            Fill out the form below to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="sectionContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resume Section Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your resume section here, e.g., your 'Experience' or 'Projects' description."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="tone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tone</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a tone" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Professional">
                            Professional
                          </SelectItem>
                          <SelectItem value="Enthusiastic">
                            Enthusiastic
                          </SelectItem>
                          <SelectItem value="Concise">Concise</SelectItem>
                          <SelectItem value="Creative">Creative</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="persona"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Persona</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a persona" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Software Engineer">
                            Software Engineer
                          </SelectItem>
                          <SelectItem value="Project Manager">
                            Project Manager
                          </SelectItem>
                          <SelectItem value="Data Scientist">
                            Data Scientist
                          </SelectItem>
                          <SelectItem value="UX Designer">
                            UX Designer
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., 'scalable', 'agile', 'user-centric'"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Rewriting...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Rewrite with AI
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isLoading || rewrittenContent) && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>AI-Generated Result</CardTitle>
            <CardDescription>
              Here is the rewritten version of your content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="space-y-4 animate-pulse">
                <div className="h-6 bg-muted rounded w-2/3"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </div>
            )}
            {rewrittenContent && (
              <div className="relative">
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-0 right-0"
                  onClick={() => {
                    navigator.clipboard.writeText(rewrittenContent);
                    toast({
                      title: 'Copied!',
                      description: 'Text copied to clipboard.',
                    });
                  }}
                >
                  Copy
                </Button>
                <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-line mt-8">
                  {rewrittenContent}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
