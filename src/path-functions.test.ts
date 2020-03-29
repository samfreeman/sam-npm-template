
import { runTests } from 'sam-core'

import { normalize } from './path-functions'


describe('normalize', () => 
	runTests(
		[() => normalize(''), ''],
		[() => normalize('joe'), 'joe'],
		[() => normalize('./joe/bob'), './joe/bob']
	))
