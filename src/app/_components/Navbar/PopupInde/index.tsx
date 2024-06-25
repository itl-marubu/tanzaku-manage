import Link from 'next/link'
import style from './index.module.scss'
import { MenuContent } from '..'
type DetailedMenuProps = {
  menuContent: MenuContent[]
  buttonClick: () => void
}

export const PopupInde: React.FC<DetailedMenuProps> = (props) => {
  const { menuContent } = props
  return (
    <div className={style.popWrap}>
      <div className={style.popInde}>
        {menuContent.map((menu, index) => {
          return (
            <Link
              href={menu.link}
              key={index}
              className={style.topLink}
              onClick={props.buttonClick}
            >
              <div>
                {menu.icon}
                <span>{menu.title}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
