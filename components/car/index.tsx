import CarBone from './carbone'
import IssueCarUpper from './issueUpper'
import PoliceCarUpper from './policeUpper'

export const PoliceCar = () => {
  return <CarBone carType='police' carUpper={<PoliceCarUpper carName='911' />} />
}

export const IssueCar = () => {
  return <CarBone carType='issue' carUpper={<IssueCarUpper carName='Bugs' />} />
}
