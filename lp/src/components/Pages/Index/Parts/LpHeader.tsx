import { VFC } from "react"

type Props = {
  title: string
}
export const LpHeader: VFC<Props> = ({
  title
}) => {
  return (
    <h2 className="mb-6 text-center">
      <span>展示会の様子</span>
      <br />
      <span className="text-2xl font-bold tracking-widest">{title}</span>
    </h2>
  )
}
