import { profile } from "@/data/profile";

export default function About() {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto space-y-24 pb-24">
      <div className="border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">ABOUT</h1>
        <p className="text-muted-foreground font-mono text-sm">
          USER_PROFILE: {profile.name.toUpperCase()}
        </p>
      </div>

      <div className="space-y-24">
        <section>
          <h2 className="font-mono text-xs text-muted-foreground mb-8 border-b border-border pb-2 inline-block">WHO I AM</h2>
          <p className="text-2xl md:text-4xl font-medium leading-tight">
            {profile.about.whoIAm}
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs text-muted-foreground mb-8 border-b border-border pb-2 inline-block">WHAT I BUILD</h2>
          <p className="text-xl md:text-3xl leading-snug text-muted-foreground">
            {profile.about.whatIBuild}
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs text-muted-foreground mb-8 border-b border-border pb-2 inline-block">WHAT I'M LEARNING</h2>
          <p className="text-xl md:text-3xl leading-snug">
            {profile.about.whatImLearning}
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs text-muted-foreground mb-8 border-b border-border pb-2 inline-block">WHAT I CARE ABOUT</h2>
          <p className="text-xl md:text-3xl leading-snug text-muted-foreground">
            {profile.about.whatICareAbout}
          </p>
        </section>
      </div>
      
      <div className="pt-24 border-t border-border flex justify-between font-mono text-xs text-muted-foreground">
        <span>EOF</span>
        <span>RENDER_COMPLETE</span>
      </div>
    </div>
  );
}
