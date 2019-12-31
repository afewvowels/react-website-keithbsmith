import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 8rem;
    height: 1.5rem;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.background};
    cursor: pointer;
    padding: 0rem 0.5rem;
`;

const Title = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledList = styled.ul`
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.background};
    z-index: 10;
    padding: 0rem 0.5rem;
    left: -0.5rem;
    width: 8rem;
`;

const StyledItem = styled.li`
    width: 100%;
    height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export default class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            listOpen: false,
            headerTitle: this.props.title,
            listItems: this.props.list
        }
    }

    handleClickOutside() {
        this.setState({
            listOpen: false
        })
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    setSelected(id) {
        for (let i = 0; i < this.props.list.length; i++) {
            this.state.listItems[i].selected = false;
        }

        this.state.listItems[id].selected = true;
    }

    render() {
        const{list} = this.props;
        const{listOpen, headerTitle} = this.state;
        return (
            <Wrapper>
                <Title onClick={() => this.toggleList()}><span>{headerTitle}</span><span>{listOpen ? 'X' : ''}</span></Title>
                {listOpen && <StyledList>
                    {this.state.listItems.map((item) => (
                        <StyledItem key={item.id} onClick={() => {
                            this.props.stateSetter(item.call);
                            this.toggleList();
                            this.setSelected(item.id);
                        }}>{item.title}{item.selected && <span>&nbsp;&#60;</span>}</StyledItem>
                    ))}
                </StyledList>}
            </Wrapper>
        );
    }
}