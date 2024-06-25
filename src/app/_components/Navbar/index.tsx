'use client'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { Button } from '@/components/Button'
import style from './index.module.scss'
import { PopupInde } from './PopupInde'
import { IconClose, IconMenu } from '../../../components/Icons/generated'

export type MenuContent = {
  title: string
  link: string
  icon?: React.ReactNode
  visible?: boolean
}

type NavbarProps = {
  showContent?: boolean
  menuInde?: ReactNode
}

const loginTokenAtom = atomWithStorage('loginToken', '')

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [loginToken, _] = useAtom(loginTokenAtom)
  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const { showContent, menuInde } = props

  const menuContent: MenuContent[] = [
    {
      title: 'プロジェクト一覧',
      link: '/events',
      visible: true,
    },
    {
      title: loginToken ? 'ログアウト' : 'ログイン',
      link: loginToken ? '/logout' : '/login',
      visible: true,
    },
  ]

  return (
    <>
      <div className={style.wrap}>
        <div className={style.inde}>
          <Link href="/" className={style.logo}>
            <h1>短冊管理ツール</h1>
          </Link>
          <nav className={style.menuItems}>
            <div className={style.invisibleOnMob}>
              {menuContent.map((menu, index) => {
                return menu.visible ? (
                  <Link href={menu.link} key={index}>
                    <Button size="sm" className={clsx(style.topLink)}>
                      {menu.icon}
                      <span>{menu.title}</span>
                    </Button>
                  </Link>
                ) : null
              })}
            </div>
            <Button
              size="sm"
              className={clsx(style.topLink, isOpenMenu && style.active)}
              onClick={handleToggleMenu}
            >
              <div className={style.topItem}>
                {isOpenMenu ? <IconClose size={20} /> : <IconMenu size={20} />}
                <span>メニュー</span>
              </div>
            </Button>
          </nav>
        </div>
      </div>
      {menuInde != undefined && isOpenMenu ? (
        <div>{menuInde}</div>
      ) : (
        isOpenMenu && (
          <div>
            <PopupInde
              menuContent={menuContent}
              buttonClick={handleToggleMenu}
            />
          </div>
        )
      )}
      {showContent && <div className={style.inter} />}
    </>
  )
}
