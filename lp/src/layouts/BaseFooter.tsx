import Image from 'next/image'
import { VFC } from 'react'

const BaseFooter: VFC = () => {
  return (
    <div className="py-4 text-center bg-gray-50">
      <a href="https://ulab-uu.com/" className="block">
        <Image
          src={`/images/u-lab/u-lab-copy-light.png`}
          width={160}
          height={40}
          alt="U-lab CopyLight"
        />
      </a>

      <div className="block" style={{ paddingTop: '8px', paddingBottom: '8px' }}>
        <a href="https://www.utsunomiya-u.ac.jp/activity/fund/fund.php" className="text-sm hover:underline">
          峰が丘地域貢献ファンド 支援事業
        </a>
      </div>
    </div>
  )
}

export { BaseFooter }
