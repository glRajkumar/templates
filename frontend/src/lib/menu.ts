import { optionTypeChecker } from './utils'

export const isSubMenu = optionTypeChecker<subMenuT>('submenu')
export const isGroupMenu = optionTypeChecker<menuGroupT>('group')
export const isInputSubMenu = optionTypeChecker<inputSubMenuT>('submenu')
export const isInputGroupMenu = optionTypeChecker<menuInputGroupT>('group')
