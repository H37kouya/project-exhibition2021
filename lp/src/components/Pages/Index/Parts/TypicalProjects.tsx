import Image from "next/image"
import { VFC } from "react"
import { LpHeader } from "@/src/components/Pages/Index/Parts/LpHeader"

export const TypicalProjects = () => {
  return (
    <div className="flex justify-center mb-20">
      <div style={{ maxWidth: 1000 }}>
        <div className="pb-4">
          <LpHeader title="参加団体" />
        </div>

        <div className="md:grid grid-cols-3 gap-6">
          <ParticipatingGroup
            title="学生団体U-lab"
            description="デザイン×技術×地域を掛け合わせた学生団体U-labです。Webデザインやプログラミング、3Dモデルの制作から実際の建築まで、幅広い技術を学びながら地域のために用いています。"
            imagePath="/images/lp-top.png"
            href="https://uu-circles.com/circle/u-lab"
          />

          <ParticipatingGroup
            title="UUAD"
            description="宇都宮大学を拠点に活動する学生団体です。空き家改修や、企業や団体とのコラボレーション、イベント企画など、地域での実践を通した学びと経験の場を提供します。"
            imagePath="/images/uuad_logo.jpg"
            href="https://uu-circles.com/circle/uuad"
          />

          <ParticipatingGroup
            title="Vレンジャー"
            description="子どもの体験の貧困をなくすため、宇都宮を拠点に発足した学生・若者ボランティアチームです！一緒にいちから企画を作りましょう。あなたも令和のヒーローに‼"
            imagePath="/images/v_renjar.jpg"
            href="https://twitter.com/Vranger20"
          />
        </div>
      </div>
    </div>
  )
}

type Props = {
  title: string
  description: string
  imagePath: string
  href: string
}
export const ParticipatingGroup: VFC<Props> = ({
  title,
  description,
  imagePath,
  href,
}) => {
  return (
    <div style={{ maxWidth: 320 }} className="pb-8">
      <a href={href}>
        <div className="flex justify-center">
          <Image src={imagePath} alt={title} width={250} height={250} />
        </div>

        <div className="mt-8">
          <h3 className="mb-2 text-lg font-bold tracking-wide">{title}</h3>
          <p className="text-sm tracking-wide leading-relaxed">{description}</p>
        </div>
      </a>
    </div>
  )
}
