export interface IMenuItem {
    icon: string;
    label: string;
    name: string;
    labelDirection: string;
    showLabel: boolean;
    translateLabel: boolean;
    selected: boolean;
    clickable?: boolean;
    backgroundColor?: string;
    color?: string;
}