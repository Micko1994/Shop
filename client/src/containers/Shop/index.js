import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {ShopButton} from '../../components/common'
import {GoodItem} from '../../components/common'
import {SettingsListsItems} from '../../components/common'

// import {
//     fetchPosts,
//     fetchSinglePost,
//     createPost,
//     updatePost,
//     deletePost,
// } from 'actions/Posts';

import './Main.scss';

const mapStateToProps = ({ posts }) => ({ posts });

// @connect(mapStateToProps, {
//     // fetchPosts,
//     // fetchSinglePost,
//     createPost,
//     updatePost,
//     deletePost,
// })
export default class Shop extends PureComponent {

    // componentWillMount() {
    //     this.props.fetchPosts();
    // }

    render() {
        // const { posts } = this.props;

        return (
            <section className="ShopContentMain">
                <GoodItem 
                    path={'data:image/jpeg;base64,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'} 
                />
                <GoodItem 
                    path={'https://cdn.shopify.com/s/files/1/0034/5230/5520/products/Flamingo_Polo_1800x.jpg?v=1556251218'} 
                />
                <GoodItem 
                    path={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEhUQDw8VDxAVEA8VEBUQFQ8PDw8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFS0dHR0tLS0tLi0rKy0rLSstLS0rKy0tKy0tLy4tLS0tLS0tLS4tLS0tMC0tLS0tLSstKy0uLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgcBAwQGBQj/xABFEAACAQIBBwULCQcFAAAAAAAAAQIDEQQFBxIhMUFRBhNhgZEUIjJCcXKSocHC0SRSYnOxsrPh8CMlMzRjdJNUZIKjw//EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBgX/xAA2EQEAAQMABgcGBQUBAAAAAAAAAQIDEQQFEiExQTJRYXGRscETM4Gh0fAUIjRTciNDUuHxgv/aAAwDAQACEQMRAD8AvEAAAAAAAAAAAAAEKlWMVeUlFcZNJesLETPByvK+FvbumlfhzlO/2kzDP2Nz/GfBJZUwz2Yil/kp/EZhPZV/4z4OmnUjLXGSkuhporGYmOKQQAAAAAAAAAAAAAAAAAAAAAAAAAHks5XKWeT8I5UWliKjcaV7PQSV51NF7dFeuUdphXViHboOje2rna6NMZn7+92VC47lNjK38bG1qi4Sqz0fRTsa8TL7VPsaOEUx4PlPFQ3zXahsT1Mp023H92PFjuun89F2J6mH4+z+4x3XS+ehsT1H46z+4lHKEY641EvI7MmxPUv463MY9pHiurNBynnJPBYqs5ycVPDOo3KTWtyp6T22Vml525Ft1b8OLWWiYopvUx34+UrSNz4oAAAAAAAAAAAAAAAAAAAAAAA5MqZSoYWnKtiKipU47XLe9ySWuTfBa2SZiN8tlq1XdqimiMzKheV/KGWUMS6zTjTitChB+LST2tbNKW19S12Oaural67QdFjR7Wzznj99UPE4rJ1OEvAWi9cduzh1GcVzMcXJc0CxTV0IaKkKUXGKppyle3g7umTMo2p5ua/GjWMZt5z2R6pulDhRb1alUoaWu3FriZbNXW5vxWjfsx4QjT0HJw5uKcVF+I1rV9q1GM5jm69HrsXZmKaI3dkNtHBwqTUdCNr3k7LVFbf10mM1TEcXRGiWq64jYjwffhUkmpRbjKLTi46nGSd009zT1mp9WqmJjE8FzciuX1HFRjRxU40cXsu7QpV3ucHsUnq73Vr2X3dFFyJ4vLabq2uzM1URmn5x3/V7c2PlgAAAAAAAAAAAAAAAAAAAcuUco0MPDnMRVhRhxnJRTfBcX0IkzEcWdu3XcnFEZl4HLudajG8cDRdaW6pWTp0l0qHhy8j0TXN3qfWsanrq33Zx2Rvn6eatMtZZxOMnzmJqurLXorZCmnuhFal9rtrbNM1TPF97R9Gt2acURhxriYt8MVqUZrRls9afFCJwlVEVRiXyqmCle1lNLerfZuZs2nHVYnO+M4cvMRtayXha1GOk7u+ttbtiNm3L5k6ttTMzmd/d9Gx2WzUYu/ERwfUyZQ0Y6T2y9Udxrqne6tHpxG11uoxdCMt5Uw9FkTltlDCJRp1udprZTrp1YpcE7qSXQnboM4rmHBf1bYu75pxPXG7/AE93kTOphqjUcXSlhpPx4t1qPXZKUexrpNkXY5vj39UXKN9udr5T9Pm95hMVTqxVSlUjVg/BlCSnF+Ro2ROXyqqaqZxVGJbisQAAAAAAAAAAAAAADwnL/l33G+5sKlLE2TnKXfQw6autW+bWtLYk03e9nrrrxuh9TQNX+3/PXup8/wDSosfjq2Im6lerKtUfjTbk0uC3RXQrI0TMy9LasUW4xTGIcxG+IERRuS8G3XuKkxPJyVo1pbZWX0dX5mUYaaqLk82r9pZRi0mpLST3x6C7ubRdpv8A5fZTEYnfnqasZDRlfc9fXv8A10lp3pep2akJUntlq6N/5GUTEOeuzXdjEzin5z9I+c9jrw2KrPxVKPT3r9XwNcxDst1XOGN3g7VVe+D6mmYujf1JBlEDIYCpMO7I+V8RhJ85hqsqUrrSS1wn0Ti9Ul5eqxYmY4Oa/o1u7TiuMro5EcsaeUYOMkqWKgr1Kafeyjs5ynfbG9rram7a7pvoor2nl9N0KrR5zxpnn6T973qTNwgAAAAAAAAAAAARqTUU5SdopNt8EtbYWIzOIfmnKOMderUryvepUqVHfW1pybS6k7dRxzOZe4sWot0U0RyjDnI3gViwGUFGBCUVt3+wqTDjUnKUlKFlCS0W/Gb/AF9hnjEbp4vn03K7t2qmqjEUzu7fvj4NnNaT17DHLt2cuunGxizxhIKAYCCCAH1uSWMdDG4apdpKvTjKzt3k3oSv0WkzOicTDh061t2K47PLe/RJ1PGgAAAAAAAAAAAAfD5c1nDJ+Kadn3PUj6a0feMa+jLp0OM6RR3w/PUnY5XtoEyKygpYKygDAjIEkIrb0v4ewstdEcZ6/wDjNiM0kFZAwACDCIoEs3dm1qdtVtqe4rCqM8X6ZwdbnKcKi8aEJekk/adjwdUYmY6m4IAAAAAAAAAAADy+cyejk3EPjzC9KtTXtMLnRl3aujOk0fHylQ09rOZ7CGum9q6wybURWbAAoBGSBLX3MnKNS7Tinq3O5ltYiYcc6NFV2i9mYmnO7lvy2pGLsSQEastFXte3bbeWmMzhqvXJt0TXjOPLn8ijU0lpJNLdfeuJaqdmcMdHvxeo24iYieGfNMxbkZAYk9QYs0wk8H6G5GVtPAYWV7vuWgn50YKL9aZ108IeJ0unZv1x2z5vsmTnAAAAAAAAAAAB43OzVtk+Ufn1qEeyWn7hrudF9HVUZ0mOzP0UjUOZ66GrY1+tTKktm8jNsSAMKwwMMDMHqXk4MSwjgwgyhJBSwGbBGAIsI11Ja+wqQ2UthCV55rq2lk2inrcZYiPUqs2vU0dVvovH6ypxpNXw8oesM3AAAAAAAAAAAACv880vktBccXF9lGr8TVd4Pr6mj+tV3esKgmc71EOerrRYJ4N0Xez4pMhTOYy2ojJhlVgDDAyEwAZCiAkiIwyojYDli7tvpfYZMYnc6oLUYquXM/V0sFNfMxVWPbCnL3jptdF5TW1OL/fH1e5Nj5YAAAAAAAAAAAK2z0Ve8w0ONStL0YxXvmm9wh9rUtP5657I+/kqlmh6aGmRROjs7V6xKU9TaiMiYIYQVgCZBEoywMATIjEyojJ2TfBNhjPBy0VqRlJHB1oxZStnMxXXMYinvWIjN+SdOMV+GzotTueY11T/AFaZ7PWfqsQ2vjAAAAAAAAAAAAqvPT/Ewv1eK+2kab3J9/UnC58PVWzND0ENEiks0N/l9gkjjLciMkaj1ghJBUWFTRERKrIRgI2rYREJlGqvK0fK0v11FhjVPJqgGTogyErEzNVmsRXhulQhJ7NsJ2X4jN1njL4GuojYonqmfn/xbRveeAAAAAAAAAAABW2ejDx5vDVbvTVSrBLc4TipNvpTpx9Jmm9wh9rUtU7ddPZE+H/VVTl0Gh6TLRUZTaRwc23JW2aGvpel8C1MLdeaph1RMW6UHtCtjIIFVNERCRVTREQZRupvURjKEyq58fGVoSs9DTktLxdNR2eW0mzKnm5btcRXTT8fRCmRty+lkzJmIxL0cPRnWd7Pm4txi/pS2R62IiZ4MLt63bjNyqI7/vetDNxyOxmDrPE4jQpp0JU+bUtOpeUoSvJrvVbQ3N7TfbomN8vP6y061epii3vxOc8vr5LFNr4wAAAAAAAAAAAOHKuSMNioqGJoxqxTbjpbYu1rprWiTETxbbV65anNFWHmMbmwybPwOdofV1HP8RSMJtUu+jXGkU8cVd8fTD4OLzQXf7LHWXCpS0n6UZr7DH2XVLqp13u/Nb8J/wBPg8rOSayXQpUudVedWvWqSmoc3ZQhTjGFtJ3tpTd/pGFdOzEOrV+k/iL1deMbojjnnLycTW+0hbWFbJERBFVMghIonEiIyWsozewSWWBY+bzk1hsfga0MVByisXeDi3CcJRpQ1xa899But0xNO957WukV2tIomid+z6y9Tk3N1kug79zus/68pVY+h4L7DZ7Ol865rPSa4xtY7t3z4vU0qUYJRhFQilZKKUYpdCWwzcMzMzmUwgAAAAAAAAAAAAAAAArLPVswj+liV2qn8DTe5Pu6j6Vz4eqsIHO9KgtpVTmRGtFVsIIzKMwCFRAYkBmIRbuZt/Jq63LF/wDjSudFng8trr31Pd6ysA2vjgAAAAAAAAAAAAAAAAAArTPWu8w3n1vuxNN7k+9qLp3O6FXw2HO9GjDaVlyJkSEEVUyIxIKRKkpzWoggthRiO0JK28zFS9DEx4YlPqdOK906LXB5fXUf1KJ7PWViG18YAAAAAAAAAAAAAAAAAAFaZ6vAw31lb7sTTe5Pu6j6dzuhWG453pOaNMLKMyrCMQJkRiQVhFRu3ERqiVUQkrRzJ1P5uPB4WXpc6vdN9nm85rynE257/RZ5ufBAAAAAAAAAAAAAAAAAABWWemWrCR4yxD6kqfxNN7k+7qSN9ye71VfORoekhKCIstcyrCMQNhAkBBFRvhsIjXbWVUZBFk5k5ftMUuMMM+x1fibrPGXn9eRut/H0Wsb3ngAAAAAAAAAAAAAAAAAAVdnqff4TohjH2ugjRe5PQajj3n/n1VijS9E3biJzaJsrJiIGwiEgqBRtpEYyxNARkiqsDMvO2Jrx44eD9GdveN1ni+FryP6dE9s+S3je80AAAAAAAAAAAAAAAAAACrc9fhYTzcV9tE0XuT0WouF3/wA+qtIo0PQNktgYxxc02VnBADYRGZBWtlGymwxTqIhCIHt8zn89P+zq+qrR+JttdJ8fXf6eP5R5SuU6XlgAAAAAAAAAAAAAAAAAAVTnpl+1wq4U677ZU/gaL3J6PUUfkuT2x6q6iaH3maj1BIc0ysyAG0IMggyjMGBvlsIxa0Ue5zSase+nCV1/2UX7DZa6T42ufcR/KPKVyHS8wAAAAAAAAAAAAAAAAAACpc8r+UUFwoSfbP8AI573GHpdR+7r7/RX0DS+3LFRlIc0wzSgBsYRlkEJFGIgdC2EYoFHtc1c7Y+PTRrL7r9hstdJ8jW8Z0f4wug6XlgAAAAAAAAAAAAAAAAAAVBnifyumv8Aax9dSp8Dnu8XptS+5q/l6Q8HA1Ps1ITYZOeRWSUCDYEZYEJAYQHRTDGWGB6nNtUtlHDr53Pp/wCGo/dRnb6T5mtIzo1fw84XmdTyQAAAAAAAAAAAAAAAAAAKfzxfzlP+1h+JUOe7xel1L7mrv9IeEizU+zLTJhm0yKyTgBsZEAIyAigjdTYSUpBHpM3j/eOG8+r+DURst9J83Wf6av4ecL4Ol5IAAAAAAAAAAAAAAAAAAFN54ZfLoLhg6Pa6tb8jnu8XptTe4n+U+UPDmp9hoZWbWwqUANhEZAjIKiVE4MiNkgj0mbx/vDDefU/CqGy30ofN1n+nr+HnC+TpeSAAAAAAAAAAAAAAAAAABS+d5/L1/a0fv1fic93i9Pqf3E98+UPE3NT67SVkgFTiFTZEAMMCNiolADYRHo83j/eGG8+f4UzZb6UPm6z/AE9fw84X2dLyQAAAAAAAAAAAAAAAAAAKVzvwaxyk01F4eioyaai2pVLpPic93i9PqeYmxiOOZ9HiVsNT6yBWTXJ23hYSg1x9ZFnKbCZABTLAQSCZSQJemzc05Tyhh3BOSjOTm4ptQjzc9cnu4GdvpQ+drOYjR687s/WF9nS8kAAAAAAAAAAAAAAAAAADEop6mrrp1oD5ON5L5Pra6mDoyb2y5uEZv/kkmY7MdToo0u/RupuTHxc1PkTkuOzA0n50dP71xsU9TZOsNJn+5Pi+jg8i4Sj/AAcLRpfV0qcH6kWKYjhDRXfu19KuZ75ltxWTsPVWjVoU6seFSEJrsaExEsaLtdE5pqmO6XwMXm9yVUd+5ubf9KdWnH0VLRXYYzbpdtGtNKpjG3nviJa4Zt8krbh5S8tbE+yaJ7KlZ1tpX+fyj6OqnyEyVHZgoPznUn96TLsU9TXOstKn+5LcuRuS/wDQ0PQiXYp6mP47Sf3J8WqXIfJTd+4qfVpRXYmNinqWNYaT+5LqoclsnQ1xwOHTWxulTk11tXGxT1MKtM0irjcq8ZfVpUowWjCKiuEUorsRk55mZ3ymEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z'} 
                />
                <GoodItem 
                    path={'https://cdn.shopify.com/s/files/1/0034/5230/5520/products/Flamingo_Polo_1800x.jpg?v=1556251218'} 
                />
                <GoodItem 
                    path={'https://cdn.shopify.com/s/files/1/0034/5230/5520/products/Flamingo_Polo_1800x.jpg?v=1556251218'} 
                />
                <GoodItem 
                    path={'data:image/jpeg;base64,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'} 
                />
                <GoodItem 
                    path={'https://cdn.shopify.com/s/files/1/0034/5230/5520/products/Flamingo_Polo_1800x.jpg?v=1556251218'} 
                />
                <GoodItem 
                    path={'https://cdn.shopify.com/s/files/1/0034/5230/5520/products/Flamingo_Polo_1800x.jpg?v=1556251218'} 
                />
            </section>
        );
    }
}
