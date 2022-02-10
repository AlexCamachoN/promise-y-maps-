import { classNames } from '../utils/classNames'

export function TextFormulario({ title, inputProps = {}, className, ...props }) {
  return (
    <div className={classNames(className, '')} {...props}>
      <label>{title}</label>
      <input
        {...inputProps}
        type="text"
        className={classNames(
          inputProps.className,
        )}
      />
    </div>
  )
}
