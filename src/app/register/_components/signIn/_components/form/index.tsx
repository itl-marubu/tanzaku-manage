import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/Button'
import Style from './index.module.scss'

type Inputs = {
  email: string
  password: string
}

type Props = {
  submitFunction: (data: Inputs) => void
}

export const Form: React.FC<Props> = ({ submitFunction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    submitFunction(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Style.formWrap}>
      <div className={Style.inputWrap}>
        <label htmlFor="email" className={Style.label}>
          メールアドレス
        </label>
        <input
          {...register('email', { required: true })}
          className={Style.input}
        />
        {errors.email && <span>メールアドレスを入力してください</span>}
      </div>
      <div className={Style.inputWrap}>
        <label htmlFor="password" className={Style.label}>
          パスワード
        </label>
        <input
          {...register('password', { required: true })}
          type="password"
          className={Style.input}
        />
        {errors.password && <span>パスワードを入力してください</span>}
      </div>
      <Button type="submit">アカウント登録</Button>
    </form>
  )
}
