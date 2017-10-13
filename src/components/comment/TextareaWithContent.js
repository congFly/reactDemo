/**
 * Created by 18829 on 2017/10/13.
 */
import wrapWithContent from './wrapWithLoadData'

class TextareaWithContent extends Component {
    render(){
        return <textarea vlaue={this.props.data}></textarea>
    }
}


TextareaWithContent = wrapWithContent(TextareaWithContent,'content');

export default TextareaWithContent;