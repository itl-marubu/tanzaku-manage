'use client'
import Link from 'next/link'
import style from './index.module.scss'
type MenuContent = {
  title: string
  link: string
}[]

export const Footer: React.FC = () => {
  const menuContent: Array<MenuContent> = [
    [
      {
        title: 'ログイン',
        link: '/login',
      },
    ],
  ]

  return (
    <>
      <div className={style.wrap}>
        <div className={style.inde}>
          <div>
            {menuContent.map((menu, index) => {
              return (
                <div key={index} className={style.menuItems}>
                  {menu.map((item, index) => {
                    return (
                      <Link key={index} href={item.link} className={style.link}>
                        {item.title}
                      </Link>
                    )
                  })}
                </div>
              )
            })}
          </div>
          <div>
            <h1 className={style.logo}>Logo</h1>
          </div>
        </div>
      </div>
    </>
  )
}
