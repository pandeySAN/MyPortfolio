import RewriterForm from './rewriter-form';

export default function ResumeRewriterPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          AI-Powered Resume Rewriter
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Enhance your resume sections with AI. Tailor the tone, persona, and keywords to perfectly match your next job application.
        </p>
      </div>
      <RewriterForm />
    </div>
  );
}
