import { NextSeo } from "next-seo";
import WhatYoullLearn from "@/components/WhatYoullLearn";

export default function Learning() {
  return (
    <>
      <NextSeo
        title="What You'll Learn - Reiki Healing"
        description="Explore what you'll gain from our Reiki Healing programs."
      />
      <main>
        <WhatYoullLearn />
      </main>
    </>
  );
}
