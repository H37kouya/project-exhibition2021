import { NextPage } from "next"
import { ActivityContents } from "@/src/components/Pages/Index/Parts/ActivityContents"
import { HopeToJoin } from "@/src/components/Pages/Index/Parts/HopeToJoin"
import { IndexHead } from "@/src/components/Pages/Index/Parts/IndexHead"
import { LpHeader } from "@/src/components/Pages/Index/Parts/LpHeader"
import { MainDescription } from "@/src/components/Pages/Index/Parts/MainDescription"
import { TypicalProjects } from "@/src/components/Pages/Index/Parts/TypicalProjects"
import { BaseFooter } from "@/src/layouts/BaseFooter"

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="overflow-hidden relative">
        <div className="right-top-rectangle" />

        <IndexHead />

        <MainDescription />

        <LpHeader title="オンライン空間" />

        <div className="flex justify-center pb-20">
          <iframe
            sandbox="allow-scripts allow-forms allow-same-origin allow-presentation allow-popups allow-downloads"
            allowFullScreen={true}
            src="https://my.matterport.com/show/?m=WpKQQGZVFNt"
            height="350"
            width="560"
            style={{
              maxWidth: "98%",
            }}
          />
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
