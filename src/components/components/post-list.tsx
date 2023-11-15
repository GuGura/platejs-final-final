'use client'


const data = [
  {
    title: 'title1',
    content: 'content1',
  },
  {
    title: 'title2',
    content: 'content2',
  },
]
export default function PostList() {
  return (
    <div className={'w-full gap-2 flex flex-col'}>
      {data.map((item, index) => {
          return (
            <div key={index} className={'border-gray-300 border flex flex-col max-w-fit'}>
              <div className={'flex w-auto'}>{item.title}</div>
              <div className={'flex w-auto'}>{item.content}</div>
            </div>)
        }
      )}
    </div>
  )
}
