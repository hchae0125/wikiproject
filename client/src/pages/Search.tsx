import react, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { IPage } from '../models/IPage'
import PageService from '../services/PageService'

interface ISearchProp extends RouteComponentProps<{keyword:string}>{

}
interface ISearchState {
    keyword : string,
    searchedList? : IPage[]
}
class Search extends Component<ISearchProp, ISearchState>{

    constructor (props: ISearchProp){
        super (props);
        this.state = {
            keyword: this.props.match.params.keyword
        }
    }

    componentDidMount () {
        const params = this.props.match.params as ISearchState
        if (params){
            if (params.keyword) this.setState({...this.state, keyword: params.keyword})
            PageService.searchPages(params.keyword).then( res => {
                console.log('result in search component: ', res)
            }).catch(err => {
                console.log('error in search component: ', err)
            })
        }
        console.log(this.state.keyword)
    }

    render () {
        const {keyword, searchedList} = this.state
        return (
            <div>
                {keyword} Search Results:
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Contents</td>
                            <td>Links</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
export default Search