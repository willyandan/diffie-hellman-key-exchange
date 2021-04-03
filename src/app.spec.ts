import {Client} from './app'

const exchangeKeys = (id:number)=>{
	const clientA = new Client(id)
	const clientB = new Client(id)

	const pubKeyA = clientA.generatePublicNumber()
	const pubKeyB = clientB.generatePublicNumber()

	const sharedKeyA = clientA.generateSharedSecret(pubKeyB)
	const sharedKeyB = clientB.generateSharedSecret(pubKeyA)
	return {sharedKeyA, sharedKeyB}
}

it('should return equals keys to id 14', ()=>{
	const {sharedKeyA, sharedKeyB} = exchangeKeys(14)
	expect(sharedKeyA).toBe(sharedKeyB)
})

it('should return equal keys to id 15',()=>{
	const {sharedKeyA, sharedKeyB} = exchangeKeys(15)
	expect(sharedKeyA).toBe(sharedKeyB)
})

it('should return equal keys to id 16', ()=>{
	const {sharedKeyA, sharedKeyB} = exchangeKeys(16)
	expect(sharedKeyA).toBe(sharedKeyB)
})

it('should return equal keys to id 17', ()=>{
	const {sharedKeyA, sharedKeyB} = exchangeKeys(17)
	expect(sharedKeyA).toBe(sharedKeyB)
})

it('should return equal keys to id 18', ()=>{
	const {sharedKeyA, sharedKeyB} = exchangeKeys(18)
	expect(sharedKeyA).toBe(sharedKeyB)
})

it('should throws id not found', ()=>{
	expect(()=>exchangeKeys(42)).toThrowError('MODP group not found')
})

it('should exchange different keys', ()=>{
	const clientA = new Client(14)
	const clientB = new Client(14)
	const clientC = new Client(14)

	const pubKeyA = clientA.generatePublicNumber()
	const pubKeyB = clientB.generatePublicNumber()
	const pubKeyC = clientC.generatePublicNumber()

	const sharedKeyBA = clientB.generateSharedSecret(pubKeyA)
	const sharedKeyAC = clientC.generateSharedSecret(pubKeyA)
	expect(sharedKeyBA).not.toBe(sharedKeyAC)
})
