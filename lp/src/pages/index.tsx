import { NextPage } from "next"
import { ActivityContents } from "@/src/components/Pages/Index/Parts/ActivityContents"
import { HopeToJoin } from "@/src/components/Pages/Index/Parts/HopeToJoin"
import { IndexHead } from "@/src/components/Pages/Index/Parts/IndexHead"
import { LpHeader } from "@/src/components/Pages/Index/Parts/LpHeader"
import { MainDescription } from "@/src/components/Pages/Index/Parts/MainDescription"
import { TypicalProjects } from "@/src/components/Pages/Index/Parts/TypicalProjects"
import { BaseFooter } from "@/src/layouts/BaseFooter"
import Image from "next/image"

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="overflow-hidden relative">
        <div className="right-top-rectangle" />

        <IndexHead />

        <MainDescription />

        <LpHeader title="ギャラリー" />

        <div className="flex justify-center pb-20 gap-6">
          <Image src="/images/pictures/uu-circles.jpg" className="object-cover rounded shadow-lg" alt="UU-Circles" width="300" height="200" />
          <Image src="/images/pictures/uu-yell.jpg" className="object-cover rounded shadow-lg" alt="学生団体U-lab" width="300" height="200" />
          <Image src="/images/pictures/v-ranger.jpg" className="object-cover rounded shadow-lg" alt="学生団体U-lab" width="300" height="200" />
        </div>

        <ActivityContents />

        <TypicalProjects />

        <HopeToJoin />

        <BaseFooter />
      </div>
    </>

  )
}

export default IndexPage
