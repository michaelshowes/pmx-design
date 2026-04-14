import { Slider as MuiSlider, type SliderProps } from '@mui/material';

type BaseProps = Pick<
	SliderProps,
	| 'value'
	| 'defaultValue'
	| 'onChange'
	| 'min'
	| 'max'
	| 'step'
	| 'marks'
	| 'disabled'
	| 'size'
	| 'color'
	| 'orientation'
	| 'valueLabelDisplay'
	| 'valueLabelFormat'
	| 'track'
	| 'getAriaLabel'
	| 'getAriaValueText'
>;

export default function Slider(props: BaseProps) {
	return <MuiSlider {...props} />;
}
