const feng = {
	'moves': [{
		'notation': '1',
		'hit_level': 'h',
		'damage': '9',
		'speed': '10',
		'on_block': '+1',
		'on_hit': '+8',
		'on_ch': '+8',
		'notes': null
	}, {
		'notation': '1, 1',
		'hit_level': 'h, m',
		'damage': '9,28',
		'speed': '10',
		'on_block': '-11',
		'on_hit': '+2',
		'on_ch': 'CS',
		'notes': null
	}, {
		'notation': '1, 2',
		'hit_level': 'h, h',
		'damage': '9,12',
		'speed': '10',
		'on_block': '-1',
		'on_hit': '+7',
		'on_ch': '+7',
		'notes': null
	}, {
		'notation': '1, 2, 2',
		'hit_level': 'h, h, h',
		'damage': '9,12,13',
		'speed': '10',
		'on_block': '-13',
		'on_hit': '+1',
		'on_ch': '+1',
		'notes': null
	}, {
		'notation': '1, 2, 2, b',
		'hit_level': 'h, h, h',
		'damage': '9,12,13',
		'speed': '10 RBT',
		'on_block': '-11',
		'on_hit': '+3',
		'on_ch': '+3',
		'notes': null
	}, {
		'notation': '1, 3',
		'hit_level': 'h, h',
		'damage': '9,22',
		'speed': '10',
		'on_block': '-6',
		'on_hit': '+5',
		'on_ch': 'Launch (JG?)',
		'notes': null
	}, {
		'notation': '2',
		'hit_level': 'h',
		'damage': '10',
		'speed': '10',
		'on_block': '-3',
		'on_hit': '+5',
		'on_ch': '+5',
		'notes': null
	}, {
		'notation': '2, 4',
		'hit_level': 'h, m',
		'damage': '10,13',
		'speed': '10',
		'on_block': '-12',
		'on_hit': '-1',
		'on_ch': '-1',
		'notes': null
	}, {
		'notation': '2, 4, 1',
		'hit_level': 'h, m, m',
		'damage': '10,13,27',
		'speed': '10 Air',
		'on_block': '-13',
		'on_hit': 'KND',
		'on_ch': 'KFUD',
		'notes': null
	}, {
		'notation': '2, 4, 1, b (Cancel)',
		'hit_level': 'h, m',
		'damage': '10,13',
		'speed': '10 RBT',
		'on_block': '-13',
		'on_hit': '-2',
		'on_ch': '-2',
		'notes': null
	}, {
		'notation': '3',
		'hit_level': 'h',
		'damage': '20',
		'speed': '16',
		'on_block': '-11',
		'on_hit': '0',
		'on_ch': '0',
		'notes': null
	}, {
		'notation': '3, 3',
		'hit_level': 'h, h',
		'damage': '20,24',
		'speed': '16',
		'on_block': '-10',
		'on_hit': '+1',
		'on_ch': '+1',
		'notes': null
	}, {
		'notation': '3, 3, 4',
		'hit_level': 'h, h, l',
		'damage': '20,24,31',
		'speed': '16 RBT',
		'on_block': '-12',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': '3, 3, 4, b (Cancel)',
		'hit_level': 'h, h',
		'damage': '20,24',
		'speed': '16 RBT',
		'on_block': '-17',
		'on_hit': '-6',
		'on_ch': '-6',
		'notes': null
	}, {
		'notation': '2~1',
		'hit_level': 'm',
		'damage': '13',
		'speed': '23~25 (24~)',
		'on_block': '-4~-2 OC',
		'on_hit': '+4~+6 OC',
		'on_ch': '+4~+6 OC',
		'notes': null
	}, {
		'notation': '2~1, 1',
		'hit_level': 'm, m',
		'damage': '13,27',
		'speed': '23~25 (24~)',
		'on_block': '-12',
		'on_hit': 'Launch',
		'on_ch': 'Launch',
		'notes': null
	}, {
		'notation': '3~4',
		'hit_level': 'm (TJ)',
		'damage': '43',
		'speed': '34~36 (35~)',
		'on_block': '-12~-10 OC',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': '3~4, b',
		'hit_level': 'm (TJ)',
		'damage': '43',
		'speed': '34~36 RBT (35~)',
		'on_block': '-7~-5 OC',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': '3~4, 3',
		'hit_level': 'm (TJ), l',
		'damage': '43,28',
		'speed': '34~36 (35~) RC',
		'on_block': '-15',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': '4~3',
		'hit_level': 'm (TC)',
		'damage': '33',
		'speed': '27~33 (28~)',
		'on_block': '-4~+2',
		'on_hit': '+4~+10 OC',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': '1+2',
		'hit_level': 'm(Absorbs 1 h/m hit)',
		'damage': '32',
		'speed': '21',
		'on_block': '-13',
		'on_hit': 'CS(KND)',
		'on_ch': 'CS',
		'notes': null
	}, {
		'notation': '1+4',
		'hit_level': 'lh',
		'damage': '9,13',
		'speed': '21,41',
		'on_block': '-31 OC',
		'on_hit': '+6',
		'on_ch': '+6',
		'notes': null
	}, {
		'notation': '1+4 (Second hit only)',
		'hit_level': 'h',
		'damage': '13',
		'speed': '41',
		'on_block': '-2',
		'on_hit': '+6',
		'on_ch': '+6',
		'notes': null
	}, {
		'notation': 'f+2',
		'hit_level': 'm',
		'damage': '16',
		'speed': '16~17',
		'on_block': '-8~-7',
		'on_hit': '+3~+4',
		'on_ch': 'FS (+10~+11 GB) 23~24',
		'notes': null
	}, {
		'notation': 'f+2, 1',
		'hit_level': 'm, m',
		'damage': '16,17',
		'speed': '16~17',
		'on_block': '-7',
		'on_hit': '+4',
		'on_ch': '+4',
		'notes': null
	}, {
		'notation': 'f+2, 1, 2',
		'hit_level': 'm, m, m',
		'damage': '16,17,27',
		'speed': '16~17',
		'on_block': '-14?',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'f+3',
		'hit_level': 'm (TJ)',
		'damage': '13',
		'speed': '21',
		'on_block': '-3',
		'on_hit': '+9',
		'on_ch': '+9',
		'notes': null
	}, {
		'notation': 'f+3, 4',
		'hit_level': 'm (TJ), m (TJ)',
		'damage': '13,27',
		'speed': '21',
		'on_block': '-16~-15',
		'on_hit': 'Launch (JG?)',
		'on_ch': 'Launch (JG?)',
		'notes': null
	}, {
		'notation': 'f+4',
		'hit_level': 'h (TJ)',
		'damage': '20',
		'speed': '18',
		'on_block': '-9',
		'on_hit': 'CS',
		'on_ch': 'CS',
		'notes': null
	}, {
		'notation': 'f+4, B',
		'hit_level': 'h (TJ)',
		'damage': '20',
		'speed': '18 RBT',
		'on_block': '-5',
		'on_hit': 'CS',
		'on_ch': 'CS',
		'notes': null
	}, {
		'notation': 'f+4, 3',
		'hit_level': 'h (TJ), m',
		'damage': '20,28',
		'speed': '18',
		'on_block': '-10~-8',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'f+4, 4',
		'hit_level': 'h (TJ), l (TC)',
		'damage': '20,20',
		'speed': '18',
		'on_block': '-12',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'f+4, 4 (Far)',
		'hit_level': 'h (TJ), l (TC)',
		'damage': '20,20',
		'speed': '18',
		'on_block': '-11',
		'on_hit': '0',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'f+1+2',
		'hit_level': 'h',
		'damage': null,
		'speed': '19?',
		'on_block': '-9?',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': 'Tail spin, Homing'
	}, {
		'notation': 'd/f+1',
		'hit_level': 'm',
		'damage': '16',
		'speed': '14',
		'on_block': '0',
		'on_hit': '+6',
		'on_ch': '+6',
		'notes': null
	}, {
		'notation': 'd/f+2',
		'hit_level': 'm',
		'damage': '20',
		'speed': '20',
		'on_block': '-9',
		'on_hit': '+4',
		'on_ch': '+4',
		'notes': null
	}, {
		'notation': 'd/f+2, 2',
		'hit_level': 'm, m',
		'damage': '20,28',
		'speed': '20',
		'on_block': '-6',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'd/f+3',
		'hit_level': 'm',
		'damage': '28',
		'speed': '18',
		'on_block': '-7',
		'on_hit': 'Launch',
		'on_ch': 'Launch',
		'notes': null
	}, {
		'notation': 'd/f+4',
		'hit_level': 'm',
		'damage': '20',
		'speed': '15',
		'on_block': '-6',
		'on_hit': '+5',
		'on_ch': '+5',
		'notes': null
	}, {
		'notation': 'd/f+3+4',
		'hit_level': 'm',
		'damage': '31',
		'speed': '23~24',
		'on_block': '-8~-7',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': 'Homing'
	}, {
		'notation': 'd+2',
		'hit_level': 'l (TC)',
		'damage': '22',
		'speed': '20 RC',
		'on_block': '-12',
		'on_hit': '-1',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'd+4',
		'hit_level': 'l',
		'damage': '9',
		'speed': '14~15',
		'on_block': '-11~-10',
		'on_hit': '0~+1',
		'on_ch': '0~+1',
		'notes': null
	}, {
		'notation': 'd+4, 1+2',
		'hit_level': 'l, m',
		'damage': '9,29',
		'speed': '14~15',
		'on_block': '-10',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'd/b+1',
		'hit_level': 'm',
		'damage': '16',
		'speed': '16',
		'on_block': '-12',
		'on_hit': '+4',
		'on_ch': '+4',
		'notes': null
	}, {
		'notation': 'd/b+1, 2',
		'hit_level': 'm, m',
		'damage': '16,24',
		'speed': '16',
		'on_block': '-12',
		'on_hit': '+7',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'd/b+1, F',
		'hit_level': 'm, (STC)',
		'damage': '16',
		'speed': '16',
		'on_block': '-16',
		'on_hit': '0',
		'on_ch': '0',
		'notes': null
	}, {
		'notation': 'd/b+1, F (After stance ends)',
		'hit_level': 'm, (STC)',
		'damage': '16',
		'speed': '16',
		'on_block': '-41',
		'on_hit': '-25',
		'on_ch': '-25',
		'notes': null
	}, {
		'notation': 'd/b+1, B',
		'hit_level': 'm, (KNP)',
		'damage': '16',
		'speed': '16',
		'on_block': '-9',
		'on_hit': '+7',
		'on_ch': '+7',
		'notes': null
	}, {
		'notation': 'd/b+1, B (After stance ends)',
		'hit_level': 'm, (KNP)',
		'damage': '16',
		'speed': '16',
		'on_block': '-35',
		'on_hit': '-19',
		'on_ch': '-19',
		'notes': null
	}, {
		'notation': 'd/b+1, 4',
		'hit_level': 'm, h',
		'damage': ',',
		'speed': '16',
		'on_block': '-2',
		'on_hit': 'KND',
		'on_ch': 'KND?',
		'notes': 'Tail spin'
	}, {
		'notation': 'd/b+2',
		'hit_level': 'l (TC)',
		'damage': '6',
		'speed': '20~21',
		'on_block': '-11~-10',
		'on_hit': '0~+1',
		'on_ch': '0~+1',
		'notes': null
	}, {
		'notation': 'd/b+2, 2',
		'hit_level': 'l (TC), l (TC)',
		'damage': '6,13',
		'speed': '20~21',
		'on_block': '-16~-15',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'd/b+2, 2, 2',
		'hit_level': 'l (TC), l (TC), m',
		'damage': '6,13,27',
		'speed': '20~21',
		'on_block': '-8~-7',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'd/b+2, 2, B (Cancel)',
		'hit_level': 'l (TC)',
		'damage': '6',
		'speed': '20~21',
		'on_block': '-17~-16',
		'on_hit': '-6~-5',
		'on_ch': '-6~-5',
		'notes': null
	}, {
		'notation': 'd/b+3',
		'hit_level': 'l (TC)',
		'damage': '16',
		'speed': '16~17 RC',
		'on_block': '-15~-14',
		'on_hit': '+4~+5 OC',
		'on_ch': '+4~+5 OC',
		'notes': null
	}, {
		'notation': 'd/b+4',
		'hit_level': 'l (TC)',
		'damage': '33',
		'speed': '28~29 RC',
		'on_block': '-21',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': 'Homing'
	}, {
		'notation': 'd/b+1+2',
		'hit_level': 'm',
		'damage': '20',
		'speed': '21~22',
		'on_block': '0~+1',
		'on_hit': '+8~+9',
		'on_ch': '+8~+9',
		'notes': null
	}, {
		'notation': 'd/b+1+2, 2',
		'hit_level': 'm, l (TC)',
		'damage': '20,20',
		'speed': '21~22 RC',
		'on_block': '-11',
		'on_hit': '0',
		'on_ch': '0',
		'notes': null
	}, {
		'notation': 'b+1',
		'hit_level': 'h',
		'damage': '22',
		'speed': '10',
		'on_block': '-9?',
		'on_hit': '+2?',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'b+2',
		'hit_level': 'm',
		'damage': '20',
		'speed': '17',
		'on_block': '-11',
		'on_hit': '0 OC',
		'on_ch': '0 OC',
		'notes': null
	}, {
		'notation': 'b+2, 3',
		'hit_level': 'm, l',
		'damage': '20,10',
		'speed': '17',
		'on_block': '-11',
		'on_hit': '0',
		'on_ch': '+8 OC',
		'notes': null
	}, {
		'notation': 'b+2, 3, 4',
		'hit_level': 'm, l, m',
		'damage': '20,10,16',
		'speed': '17',
		'on_block': '-12',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'b+2, 3, 4, 2',
		'hit_level': 'm, l, m, m',
		'damage': '20,10,16,28',
		'speed': '17',
		'on_block': '-6~-5 OC',
		'on_hit': '+4~+5 OC',
		'on_ch': '+4~+5 OC',
		'notes': null
	}, {
		'notation': 'b+3',
		'hit_level': 'm',
		'damage': '16',
		'speed': '23',
		'on_block': '-8',
		'on_hit': '+3',
		'on_ch': '+3',
		'notes': null
	}, {
		'notation': 'b+3, 3',
		'hit_level': 'm, h',
		'damage': '16,20',
		'speed': '23',
		'on_block': '-6',
		'on_hit': '+3',
		'on_ch': 'CS',
		'notes': null
	}, {
		'notation': 'B+3~4',
		'hit_level': '(Special)',
		'damage': null,
		'speed': 'RBT',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': 'b+4',
		'hit_level': 'm',
		'damage': '20',
		'speed': '12',
		'on_block': '-9',
		'on_hit': '+2',
		'on_ch': '+2',
		'notes': null
	}, {
		'notation': 'b+1+2',
		'hit_level': 'm',
		'damage': '40',
		'speed': '13~14',
		'on_block': '~-22?',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'u/b+2',
		'hit_level': 'mh',
		'damage': '17,28',
		'speed': '16,32',
		'on_block': '-10',
		'on_hit': '+9',
		'on_ch': '+9',
		'notes': null
	}, {
		'notation': 'u/b+2 (First hit only, Second hit miss)',
		'hit_level': 'm',
		'damage': '17',
		'speed': '16',
		'on_block': '-37',
		'on_hit': '-26',
		'on_ch': '-26',
		'notes': null
	}, {
		'notation': 'u/b+1+2',
		'hit_level': '!',
		'damage': '67',
		'speed': '79',
		'on_block': 'CS',
		'on_hit': 'CS',
		'on_ch': 'CS',
		'notes': null
	}, {
		'notation': 'u+2',
		'hit_level': 'm (TJ)',
		'damage': '40',
		'speed': '38~40',
		'on_block': '0~+2',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'u/b or u or u/f+1',
		'hit_level': 'm (TJ)',
		'damage': '16',
		'speed': '18',
		'on_block': '-7',
		'on_hit': '+4(+12)',
		'on_ch': '+4(+12)',
		'notes': null
	}, {
		'notation': 'u/f+2',
		'hit_level': 'm',
		'damage': '24',
		'speed': '18',
		'on_block': '-10',
		'on_hit': '+3',
		'on_ch': 'CS',
		'notes': null
	}, {
		'notation': 'u/b or u or u/f+3',
		'hit_level': 'm (TJ)',
		'damage': '29',
		'speed': '21~22',
		'on_block': '-2~-1',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'u/b+4',
		'hit_level': 'm (TJ)',
		'damage': '14',
		'speed': '15',
		'on_block': '-20',
		'on_hit': '-8',
		'on_ch': '-8',
		'notes': null
	}, {
		'notation': 'u+4',
		'hit_level': 'm (TJ)',
		'damage': '20',
		'speed': '15~16',
		'on_block': '-13~-12',
		'on_hit': 'KND',
		'on_ch': 'Launch (JG?)',
		'notes': null
	}, {
		'notation': 'u/f+4',
		'hit_level': 'm (TJ)',
		'damage': '17',
		'speed': '15~16',
		'on_block': '-13~-12',
		'on_hit': 'Launch (JG?)',
		'on_ch': 'Launch (JG?)',
		'notes': null
	}, {
		'notation': 'u/f+3+4',
		'hit_level': 'mhh',
		'damage': '13,13,13',
		'speed': '24,31,37',
		'on_block': '-10',
		'on_hit': 'Launch',
		'on_ch': 'Launch',
		'notes': null
	}, {
		'notation': 'u/f+3+4 (Third hit miss)',
		'hit_level': 'mh',
		'damage': '13,13',
		'speed': '24,31',
		'on_block': '-16',
		'on_hit': 'Launch',
		'on_ch': 'Launch',
		'notes': null
	}, {
		'notation': 'u/f+3+4 (second and third hit miss)',
		'hit_level': 'm',
		'damage': '13',
		'speed': '24',
		'on_block': '-28',
		'on_hit': '-17',
		'on_ch': '-17',
		'notes': null
	}, {
		'notation': 'u/f+3+4, 3',
		'hit_level': 'mhh, h',
		'damage': '13,13,13,28',
		'speed': '24',
		'on_block': '-6',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'f, F+2',
		'hit_level': 'm',
		'damage': '31',
		'speed': '18(19~)',
		'on_block': '-10',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'f, F+3',
		'hit_level': 'm',
		'damage': '40',
		'speed': '32~33 (33~)',
		'on_block': '+4~+5 OC',
		'on_hit': '+8~+9 OC',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'f, F+4',
		'hit_level': 'm',
		'damage': '17',
		'speed': '19(20~)',
		'on_block': '-15',
		'on_hit': 'Launch (JG?)',
		'on_ch': 'Launch (JG?)',
		'notes': null
	}, {
		'notation': 'f, F+4, 3',
		'hit_level': 'm, m',
		'damage': '17,28',
		'speed': '19(20~)',
		'on_block': '-12',
		'on_hit': 'Launch (JG?)',
		'on_ch': 'Launch (JG?)',
		'notes': null
	}, {
		'notation': 'f, F+1+2',
		'hit_level': 'm',
		'damage': '31',
		'speed': '23(24~)',
		'on_block': '-10',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': 'Power crush'
	}, {
		'notation': 'f, F+1+2* (Very long hold)',
		'hit_level': 'm',
		'damage': '37',
		'speed': '39(40~)',
		'on_block': '+1',
		'on_hit': '+23',
		'on_ch': '+23',
		'notes': 'Power crush'
	}, {
		'notation': 'b, f+1',
		'hit_level': 'm',
		'damage': '33',
		'speed': '25(25~)',
		'on_block': '-15',
		'on_hit': 'KND',
		'on_ch': 'CS',
		'notes': null
	}, {
		'notation': 'f, f, f+3',
		'hit_level': 'm (TJ)',
		'damage': '40',
		'speed': '20~25 (23~)',
		'on_block': '+6~+11 GB',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'WS+1',
		'hit_level': 'm',
		'damage': '17',
		'speed': '14',
		'on_block': '-1',
		'on_hit': '+5',
		'on_ch': '+5',
		'notes': null
	}, {
		'notation': 'WS+1, 2',
		'hit_level': 'm, m',
		'damage': '17,18',
		'speed': '14',
		'on_block': '-10',
		'on_hit': '+1',
		'on_ch': '+1',
		'notes': null
	}, {
		'notation': 'WS+1, 2, 1',
		'hit_level': 'm, m, m',
		'damage': '17,18,27',
		'speed': '14',
		'on_block': '-12',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'WS+2',
		'hit_level': 'm',
		'damage': '22',
		'speed': '15',
		'on_block': '-9',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'WS+3',
		'hit_level': 'm',
		'damage': '27',
		'speed': '15~16',
		'on_block': '-12~-11',
		'on_hit': 'Launch (JG?)',
		'on_ch': 'Launch (JG?)',
		'notes': null
	}, {
		'notation': 'WS+4',
		'hit_level': 'm',
		'damage': '24',
		'speed': '11~12',
		'on_block': '-7~-6',
		'on_hit': '+4~+5',
		'on_ch': '+4~+5',
		'notes': null
	}, {
		'notation': 'WS+1+2',
		'hit_level': 'm(h or m punch parry?)',
		'damage': '33',
		'speed': '23',
		'on_block': '-10',
		'on_hit': 'KND(+32)',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'FC+d/f+1',
		'hit_level': 'l',
		'damage': '24',
		'speed': '21 RC',
		'on_block': '-13',
		'on_hit': '-2',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'SS+2',
		'hit_level': 'h',
		'damage': '21',
		'speed': '15 RBT(24~)',
		'on_block': '-1',
		'on_hit': '+9',
		'on_ch': '+9',
		'notes': 'Homing'
	}, {
		'notation': 'SS+3',
		'hit_level': 'h',
		'damage': '16',
		'speed': '18(27~)',
		'on_block': '-13',
		'on_hit': '-2',
		'on_ch': '-2',
		'notes': null
	}, {
		'notation': 'SS+3, b',
		'hit_level': 'h',
		'damage': '16',
		'speed': '18 RBT(27~)',
		'on_block': '-11',
		'on_hit': '0',
		'on_ch': '0',
		'notes': null
	}, {
		'notation': 'SS+3, 2',
		'hit_level': 'h, m',
		'damage': '16,27',
		'speed': '18(27~) RBT',
		'on_block': '-5',
		'on_hit': 'CS',
		'on_ch': 'CS',
		'notes': null
	}, {
		'notation': 'SS+4',
		'hit_level': 'l',
		'damage': '18',
		'speed': '21 RC(30~)',
		'on_block': '-31',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'SS+4 (Far)',
		'hit_level': 'l',
		'damage': '18',
		'speed': '21 RC(30~)',
		'on_block': '-31',
		'on_hit': '-2',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'SS+1+2',
		'hit_level': 'm',
		'damage': '32',
		'speed': '22(31~)',
		'on_block': '0',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'Grounded face up 3+4',
		'hit_level': 'm',
		'damage': '27',
		'speed': '30~31',
		'on_block': '-4~-3',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'Opponent Down d+3+4',
		'hit_level': 'On grounded opponent(l)',
		'damage': '24',
		'speed': '24',
		'on_block': '-13',
		'on_hit': '-2',
		'on_ch': '-2',
		'notes': null
	}, {
		'notation': '1+3+4',
		'hit_level': '(Special)',
		'damage': null,
		'speed': '24',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': '1+2+3+4',
		'hit_level': '(Special)',
		'damage': null,
		'speed': '24',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': '1+2+3+4*',
		'hit_level': '(Special)',
		'damage': null,
		'speed': '24',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': 'in rage d+1+2',
		'hit_level': null,
		'damage': null,
		'speed': '24',
		'on_block': '–',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': 'Rage art'
	}, {
		'notation': 'f+3+4',
		'hit_level': '(STC)',
		'damage': null,
		'speed': '(3~)',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': 'f+3+4',
		'hit_level': 'Parry, m(STC)',
		'damage': '25',
		'speed': '3~',
		'on_block': '-17',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'STC b',
		'hit_level': '(KNP)',
		'damage': null,
		'speed': 'RBT',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': 'STC 1',
		'hit_level': 'm',
		'damage': '27',
		'speed': '20(40~)',
		'on_block': '-14',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'STC 2',
		'hit_level': 'm',
		'damage': '20',
		'speed': '15(35~)',
		'on_block': '-13',
		'on_hit': 'Launch',
		'on_ch': 'Launch',
		'notes': null
	}, {
		'notation': 'STC 3',
		'hit_level': 'h',
		'damage': '40',
		'speed': '20(40~)',
		'on_block': '+8',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'STC 4',
		'hit_level': 'l',
		'damage': '27',
		'speed': '20(40~)',
		'on_block': '-14',
		'on_hit': '+2',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'STC 4 (Far)',
		'hit_level': 'l',
		'damage': '27',
		'speed': '21(41~)',
		'on_block': '-8',
		'on_hit': '+3',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'STC 1+2',
		'hit_level': 'm',
		'damage': '9',
		'speed': '15~16 (35~)',
		'on_block': '-9~-8',
		'on_hit': '+2~+3',
		'on_ch': '+2~+3',
		'notes': null
	}, {
		'notation': 'STC 1+2, 1',
		'hit_level': 'm, h',
		'damage': '9,10',
		'speed': '15~16 (35~)',
		'on_block': '-11',
		'on_hit': '0',
		'on_ch': '0',
		'notes': null
	}, {
		'notation': 'STC 1+2, 1, 2',
		'hit_level': 'm, h, h',
		'damage': '9,10,24',
		'speed': '15~16 (35~)',
		'on_block': '-11',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'b+3+4',
		'hit_level': '(KNP)',
		'damage': null,
		'speed': '15~16 (35~)',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': 'KNP f',
		'hit_level': '(Special)(Parry)(KNP)',
		'damage': null,
		'speed': '15~16 (35~)',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': 'KNP 1',
		'hit_level': 'l (TC)',
		'damage': '29',
		'speed': '20 RC(35~)',
		'on_block': '-13',
		'on_hit': '+8 OC',
		'on_ch': '+8 OC',
		'notes': null
	}, {
		'notation': 'KNP 2',
		'hit_level': 'h',
		'damage': '27',
		'speed': '14(29~)',
		'on_block': '-9',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'KNP 3',
		'hit_level': 'm (TJ)',
		'damage': '22',
		'speed': '22(37~)',
		'on_block': '-12',
		'on_hit': 'Launch (JG?)',
		'on_ch': 'Launch (JG?)',
		'notes': null
	}, {
		'notation': 'KNP 4',
		'hit_level': 'm (TJ)',
		'damage': '40',
		'speed': '31~34 RC (46~)',
		'on_block': '-7~-4',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'KNP 4, 3+4',
		'hit_level': 'm (TJ), m',
		'damage': '40,27',
		'speed': '31~34 (46~)',
		'on_block': '-7~-4',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'qcf',
		'hit_level': '(Special)',
		'damage': null,
		'speed': 'RC',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': 'qcf+1',
		'hit_level': 'l (TC)',
		'damage': '33',
		'speed': '22(24~)',
		'on_block': '-14',
		'on_hit': '+2',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'qcf+2',
		'hit_level': 'm',
		'damage': '29',
		'speed': '22(24~)',
		'on_block': '-14',
		'on_hit': 'Launch',
		'on_ch': 'Launch',
		'notes': null
	}, {
		'notation': 'qcf, 3',
		'hit_level': 'm',
		'damage': '27',
		'speed': '15~16 (17~)',
		'on_block': '-12~-11',
		'on_hit': 'Launch (JG?)',
		'on_ch': 'Launch (JG?)',
		'notes': null
	}, {
		'notation': 'qcf, 4',
		'hit_level': 'm',
		'damage': '24',
		'speed': '11~12 (13~)',
		'on_block': '-7~-6',
		'on_hit': '+4~+5',
		'on_ch': '+4~+5',
		'notes': null
	}, {
		'notation': 'qcf+1+2',
		'hit_level': 'm',
		'damage': '31',
		'speed': '16(18~)',
		'on_block': '+4 OC',
		'on_hit': '+9 OC',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'qcf+3+4',
		'hit_level': '(STC)',
		'damage': null,
		'speed': '16(18~)',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': 'qcf+1+4',
		'hit_level': 'lh',
		'damage': '9,13',
		'speed': '21,41 (23~)',
		'on_block': '-31 OC',
		'on_hit': '+6',
		'on_ch': '+6',
		'notes': null
	}, {
		'notation': 'qcf+1+4 (Second hit only)',
		'hit_level': 'h',
		'damage': '13',
		'speed': '41(43~)',
		'on_block': '-2',
		'on_hit': '+6',
		'on_ch': '+6',
		'notes': null
	}, {
		'notation': 'B+3~4',
		'hit_level': '(Special)',
		'damage': null,
		'speed': 'RBT',
		'on_block': null,
		'on_hit': null,
		'on_ch': null,
		'notes': null
	}, {
		'notation': 'BT 1',
		'hit_level': 'h',
		'damage': '16',
		'speed': '12',
		'on_block': '-1',
		'on_hit': '+14',
		'on_ch': '+14',
		'notes': null
	}, {
		'notation': 'BT 2',
		'hit_level': 'm',
		'damage': '16',
		'speed': '16 RBT',
		'on_block': '-6',
		'on_hit': '+5',
		'on_ch': '+5',
		'notes': null
	}, {
		'notation': 'BT 2, 2',
		'hit_level': 'm, m',
		'damage': '16,22',
		'speed': '16',
		'on_block': '-13 OC',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'BT 3',
		'hit_level': 'm',
		'damage': '40',
		'speed': '32~33',
		'on_block': '+4~+5 OC',
		'on_hit': '+8~+9 OC',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'BT 1+2',
		'hit_level': 'm',
		'damage': '29',
		'speed': '16 RBT',
		'on_block': '-5',
		'on_hit': 'CS',
		'on_ch': 'CS',
		'notes': null
	}, {
		'notation': 'BT d+3',
		'hit_level': 'l (TC)',
		'damage': '18',
		'speed': '18 RC',
		'on_block': '-26',
		'on_hit': 'KND',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'BT d+3 (Far)',
		'hit_level': 'l (TC)',
		'damage': '18',
		'speed': '19 RC',
		'on_block': '-26',
		'on_hit': '-3',
		'on_ch': 'KND',
		'notes': null
	}, {
		'notation': 'BT 1+4 or 2+3',
		'hit_level': 'h(Throw)',
		'damage': '50',
		'speed': '13',
		'on_block': 'Throw',
		'on_hit': 'Throw',
		'on_ch': 'Throw',
		'notes': null
	}],
	'metadata': {
		'ver': '0.4',
		'game': 't7',
		'character': 'feng',
		'type': 'normal'
	}
}

export default feng;