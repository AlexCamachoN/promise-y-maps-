import { classNames } from '../utils/classNames'

export function TextFormulario({ title, inputProps = {}, className, ...props }) {
  return (
    <div className={classNames(className, 'flex flex-col')} {...props}>
      <label>{title}</label>
      <input
        {...inputProps}
        type="text"
        className={classNames(
          inputProps.className,
          'border border-gray-300 bg-gray-50 h-14 focus:border-indigo-500 px-5 text-xl'
        )}
      />
    </div>
  )
}
