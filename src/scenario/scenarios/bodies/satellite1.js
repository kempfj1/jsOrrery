import { AU } from '../../../constants';


export const satellite1 = {
	title: 'Satellite 1',
	name: 'satellite1',
	mass: 1.8986e27,
	radius: 71492,
	color: '#f67e93',
	map: './img/satellite1.jpg',
	orbit: {
		base: {
			a: 5.20288700 * AU,
			e: 0.04838624,
			i: 1.30439695,
			l: 34.39644051,
			lp: 14.72847983,
			o: 100.47390909,
		},
		cy: {
			a: -0.00011607 * AU,
			e: -0.00013253,
			i: -0.00183714,
			l: 3034.74612775,
			lp: 0.21252668,
			o: 0.20469106,
		},
	},
};