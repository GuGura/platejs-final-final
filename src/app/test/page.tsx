'use client';
import PlateEditor from "@/components/plate-editor";
import ButtonSave from "@/components/components/Button";

export default function page() {
  return (
    <div className={'container pb-8 pt-6 md:py-10 items-center'}>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Plate Playground.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Plugin system & primitive component library.{' '}
          <br className="hidden sm:inline" />
          CLI for styled components. Customizable. Open Source. And Next.js 13
          Ready.
        </p>
      </div>
      <div className="max-w-[1336px] rounded-lg border bg-background shadow">
        <PlateEditor/>
      </div>
      <ButtonSave/>
    </div>
  )
}
