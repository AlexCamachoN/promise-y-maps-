import {classNames} from '../utils/classNames'

export function Button({ classNames, disabled, ...props}){
    return (
        <Button disabled={disabled}
        classNames={
            classNames(
                classNames,
            )
        }{...props}/>
    )
}
