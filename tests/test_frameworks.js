import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
export {sinon as default} from 'sinon'
import { shallow, mount, render } from 'enzyme'

chai.use(chaiEnzyme());

export const enzyme = { shallow, mount, render}
export const expect = chai.expect
