/**
 * Created by 18829 on 2017/10/13.
 */
import wrapWithAjaxData from './wrapWithAjaxData'

class InputWithUserName extends Component {
    render() {
        return <input value={this.props.data}/>
    }
}

InputWithUserName = wrapWithAjaxData(InputWithUserName, 'username')
export default InputWithUserName