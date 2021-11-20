import Image from "next/image"

export const MainDescription = () => {
  return (
    <div className="flex relative justify-center pt-4 md:pt-20 pb-20">
      <div style={{ maxWidth: 1000 }}>
        <div className="flex flex-col-reverse md:flex-row justify-center px-4 md:px-0">
          <div>
            <p className="mb-4 text-lg tracking-widest">主催：学生団体U-lab</p>
            <h2 className="mb-4 text-4xl font-bold tracking-widest">
              <div className="mb-4">コロナ禍から考える</div>
              <div>ニューノーマルな学生プロジェクト展</div>
            </h2>
            <p className="tracking-wide leading-loose">
            新型コロナウイルスが蔓延している中、ここ宇都宮では学生プロジェクトが数々生みだされてきました。
            その活動を地域住民のみなさんに認知してもらうために、オフライン・オンライン同時のハイブリッド形式で展示会を開催します。
            オフラインの空間に存在する展示物や、展示会の様子を360度自由に動かして体験することができます。
            ぜひお楽しみください！
            </p>
          </div>

          <div>
            <h1 style={{ minWidth: 320 }} className="flex justify-center">
              <div className="hidden md:block">
                <Image src="/images/ulab-touka.png" alt="学生団体U-lab" width="400" height="400" />
              </div>
              <div className="md:hidden pb-4 pl-8">
                <Image src="/images/u-lab/u-lab-copy-light.png" alt="学生団体U-lab" width="240" height="60" />
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
