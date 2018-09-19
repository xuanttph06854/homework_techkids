import moment from 'moment';
import 'moment/locale/vi';

export function convertDate(string) {
    return moment(string * 1000).format('L');
}