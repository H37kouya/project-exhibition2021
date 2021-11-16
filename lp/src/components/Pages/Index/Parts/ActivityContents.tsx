import Image from "next/image"
import { VFC } from "react"
import { LpHeader } from "@/src/components/Pages/Index/Parts/LpHeader"

export const ActivityContents = () => {
  return (
    <div className="flex justify-center mb-20">
      <div style={{ maxWidth: 1000 }}>
        <LpHeader title="イベント内容" />

        <div className="md:grid grid-cols-2 gap-6">
          <ActivityContent
            title="Cafe ink Blue"
            num="01"
            description="プロジェクト展の参加団体がポスターを展示します。ポスターの近くに行くと活動秘話をたくさん聞けるはず！ジャンル不問のLT会もあり、個性が光るメンバーの姿が見れます。"
            imagePath="/images/cafe_ink_blue.jpg"
          />

          <ActivityContent
            title="オリオンスクエア"
            num="02"
            description="オリオン通りの象徴にて Polyzome を展示します。Polyzome は生と死をテーマに、「生命とは何か」を表現します。夜は綺麗にライトアップして幻想的な世界が広がります。"
            imagePath="/images/polyzome_210203_8_0.jpg"
          />
        </div>
      </div>
    </div>
  )
}

type Props = {
  num: string
  title: string
  description: string
  imagePath: string
}
const ActivityContent: VFC<Props> = ({
  imagePath,
  num,
  title,
  description,
}) => {
  return (
    <div id={`activity_content_${num}`} style={{ maxWidth: 320 }} className="pb-8">
      <div>
        <div className="flex justify-center">
          <Image src={imagePath} alt={title} className="rounded-lg" width="250" height="250" objectFit="cover" />
        </div>

        <div className="flex mt-8">
          <p className="mr-4 text-4xl font-bold">{num}</p>

          <div>
            <h3 className="mt-1 mb-2 text-2xl font-bold">{title}</h3>
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
