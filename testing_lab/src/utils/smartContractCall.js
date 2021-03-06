import { contractLab } from '../config/contractInterface'

export default async function smartContractCall(
  contractIndex, callType, name, values
) {

  console.log(values)

  const subContract = Object.keys(contractLab)[contractIndex]
  const args = Object.values(values)

  if (typeof window.ethereum !== 'undefined') {

    return await contractLab[subContract][callType][name](...args)
      .then((data) => {
        console.log(data)
        return data
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  }
}
