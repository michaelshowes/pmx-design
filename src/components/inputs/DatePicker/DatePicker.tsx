import {
	DatePicker as MuiDatePicker,
	type DatePickerProps
} from '@mui/x-date-pickers/DatePicker';

export default function DatePicker(props: DatePickerProps) {
	return <MuiDatePicker {...props} />;
}
