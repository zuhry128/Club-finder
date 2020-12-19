class ClubItem extend HTMLElement {
    set club(club) {
        this._club = club;
        this.render();
    }

    render() {
        clubElement.innerHTML = `
        <img class="fan-art-club" src="  ${fanArt}  " alt="Fan Art">
        <div class="club-info">
            <h2>${this._club.name}</h2>
            <p>${this._club.description}</p> 
        </div>`;
    }
}

customElements("club-item", ClubItem);