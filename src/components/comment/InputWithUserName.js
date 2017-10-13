/**
 * Created by 18829 on 2017/10/13.
 */
import wrapWithLoadData from './wrapWithLoadData'

class InputWithUserName extends Component {
    render() {
        return <input value={this.props.data}/>
    }
}


InputWithUserName = wrapWithLoadData(InputWithUserName,'username');

export default InputWithUserName