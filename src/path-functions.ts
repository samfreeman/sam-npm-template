
import * as fs from 'fs'
import 'sam-core'


export const normalize = (p: string): string =>
	p && p.replace(/\\/g, '/')
