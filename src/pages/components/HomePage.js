import React, { Component } from 'react'
import ShowInfo from './Shows/ShowInfo'
import "./home-page.css"

export default class Home extends Component {
    constructor() {
        super()
        let favorites = localStorage.getItem("favoriteShows")
        this.state = {
            showData: [],
            favoriteShows: JSON.parse(favorites) || []
        }
    }

    componentDidMount() {
        fetch("http://api.tvmaze.com/shows")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    showData: json
                })
            })
            .catch(err => console.log(err))
    }

    addFavorite = (show) => {
        let favorites = [...this.state.favoriteShows]
        favorites.push(show)
        localStorage.setItem("favoriteShows", JSON.stringify(favorites))
        this.setState({
            favoriteShows: favorites
        })
    }

    removeFromFavorite = (index) => {
        let favorites = [...this.state.favoriteShows]

        favorites.splice(index, 1)
        localStorage.setItem("favoriteShows", JSON.stringify(favorites))
        this.setState({
            favoriteShows: favorites
        })
    }

    render() {
        return (
            <div className="main-container">
                {this.state.favoriteShows.length > 0 &&
                    <React.Fragment>
                        <h2>Favorite Shows</h2>
                        {this.state.favoriteShows.map((showData, index) => (
                            <React.Fragment key={showData.id}>
                                <ShowInfo favorite={true} removeFromFavorite={this.removeFromFavorite} index={index} showData={showData} />
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                }
                <h2>Shows</h2>
                {this.state.showData.map(showData => (
                    <React.Fragment key={showData.id}>
                        <ShowInfo showData={showData} addToFavorite={this.addFavorite} />
                    </React.Fragment>
                ))}
            </div>
        )
    }
}
