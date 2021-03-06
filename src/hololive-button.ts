import { LitElement, html, css } from 'lit-element'
import { customElement, internalProperty, property } from 'lit-element/lib/decorators'

@customElement('gura-button')
export class GuraButton extends LitElement {
    @property({ type : 'string'})
    src = ''

    @property({ type : 'number'})
    time = 2

    @internalProperty()
    isPlaying = false

    play() {
        requestAnimationFrame(() => {this.isPlaying = true})

        if (this.isPlaying) this.isPlaying = false

        let sound = this.shadowRoot?.getElementById('sound') as HTMLAudioElement

        sound.pause()
        sound.currentTime = 0
        sound.play()

        sound.onplaying = () => {
            setTimeout(() => {
                this.isPlaying = false
            }, this.time * 1000 + 750)

            if ('mediaSession' in navigator) {
                // @ts-ignore
                navigator.mediaSession.setActionHandler('play', () =>
                    sound.play()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('pause', () =>
                    sound.pause()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekbackward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekforward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'previoustrack',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('nexttrack', () => null)
            }
        }
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                justify-content: center;
                margin: 20px 0;
            }

            #sound {
                display: none;
            }

            #button {
                position: relative;
                display: flex;
                flex-direction: row;
                appearance: none;
                -webkit-appearance: none;
                padding: 12px 32px;
                border-radius: 4px;
                background-color: #6381c1;
                box-shadow: 0 2px 4px #6381c170, 0 4px 16px #6381c150,
                    0 16px 40px #6381c150;
                border: 0;
                outline: none;
                cursor: pointer;
                transition: box-shadow 0.2s ease-out;
            }

            #button:hover,
            #button:focus {
                box-shadow: 0 2px 4px #6381c180, 0 20px 48px #6381c160,
                    0 16px 40px #6381c160;
            }
            #title {
                font-family: 'Noto Sans SC', sans-serif;
                color: #fff;
                margin: 0;
                font-size: 21px;
            }

            #overlay {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 0;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.2);
            }

            @keyframes play {
                from {
                    width: 0;
                }

                to {
                    width: 100%;
                }
            }

            @keyframes fade-out {
                from {
                    width: 100%;
                    opacity: 1;
                }

                to {
                    width: 100%;
                    opacity: 0;
                }
            }
        `
    }

    render() {
        return html`
            <button id="button" @click="${this.play}">
                <p id="title">
                    <slot></slot>
                </p>
                <div
                    id="overlay"
                    style=${this.isPlaying
                        ? `animation: play ${this.time}s 0s 1 ease-out, fade-out .75s ${this.time}s 1 ease-out;`
                        : ''}
                />
            </button>
            <audio id="sound" preload="metadata">
                <source src="/sound/gura/${this.src}" type="audio/mpeg" />
            </audio>
        `
    }
}

@customElement('peko-button')
export class PekoButton extends LitElement {
    @property({ type : 'string'})
    src = ''

    @property({ type : 'number'})
    time = 2

    @internalProperty()
    isPlaying = false

    play() {
        requestAnimationFrame(() => {this.isPlaying = true})

        if (this.isPlaying) this.isPlaying = false

        let sound = this.shadowRoot?.getElementById('sound') as HTMLAudioElement

        sound.pause()
        sound.currentTime = 0
        sound.play()

        sound.onplaying = () => {
            setTimeout(() => {
                this.isPlaying = false
            }, this.time * 1000 + 750)

            if ('mediaSession' in navigator) {
                // @ts-ignore
                navigator.mediaSession.setActionHandler('play', () =>
                    sound.play()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('pause', () =>
                    sound.pause()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekbackward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekforward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'previoustrack',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('nexttrack', () => null)
            }
        }
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                justify-content: center;
                margin: 20px 0;
            }

            #sound {
                display: none;
            }

            #button {
                position: relative;
                display: flex;
                flex-direction: row;
                appearance: none;
                -webkit-appearance: none;
                padding: 12px 32px;
                border-radius: 4px;
                background-color: #ed9121;
                box-shadow: 0 2px 4px #ed912170, 0 4px 16px #ed912150,
                    0 16px 40px #ed912150;
                border: 0;
                outline: none;
                cursor: pointer;
                transition: box-shadow 0.2s ease-out;
            }

            #button:hover,
            #button:focus {
                box-shadow: 0 2px 4px #ed912180, 0 20px 48px #ed912160,
                    0 16px 40px #ed912160;
            }
            #title {
                font-family: 'Noto Sans SC', sans-serif;
                color: #fff;
                margin: 0;
                font-size: 21px;
            }

            #overlay {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 0;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.2);
            }

            @keyframes play {
                from {
                    width: 0;
                }

                to {
                    width: 100%;
                }
            }

            @keyframes fade-out {
                from {
                    width: 100%;
                    opacity: 1;
                }

                to {
                    width: 100%;
                    opacity: 0;
                }
            }
        `
    }

    render() {
        return html`
            <button id="button" @click="${this.play}">
                <p id="title">
                    <slot></slot>
                </p>
                <div
                    id="overlay"
                    style=${this.isPlaying
                        ? `animation: play ${this.time}s 0s 1 ease-out, fade-out .75s ${this.time}s 1 ease-out;`
                        : ''}
                />
            </button>
            <audio id="sound" preload="metadata">
                <source src="/sound/peko/${this.src}" type="audio/mpeg" />
            </audio>
        `
    }
}

@customElement('calliope-button')
export class CalliopeButton extends LitElement {
    @property({ type : 'string'})
    src = ''

    @property({ type : 'number'})
    time = 2

    @internalProperty()
    isPlaying = false

    play() {
        requestAnimationFrame(() => {this.isPlaying = true})

        if (this.isPlaying) this.isPlaying = false

        let sound = this.shadowRoot?.getElementById('sound') as HTMLAudioElement

        sound.pause()
        sound.currentTime = 0
        sound.play()

        sound.onplaying = () => {
            setTimeout(() => {
                this.isPlaying = false
            }, this.time * 1000 + 750)

            if ('mediaSession' in navigator) {
                // @ts-ignore
                navigator.mediaSession.setActionHandler('play', () =>
                    sound.play()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('pause', () =>
                    sound.pause()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekbackward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekforward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'previoustrack',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('nexttrack', () => null)
            }
        }
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                justify-content: center;
                margin: 20px 0;
            }

            #sound {
                display: none;
            }

            #button {
                position: relative;
                display: flex;
                flex-direction: row;
                appearance: none;
                -webkit-appearance: none;
                padding: 12px 32px;
                border-radius: 4px;
                background-color: #b82a44;
                box-shadow: 0 2px 4px #b82a4470, 0 4px 16px #b82a4450,
                    0 16px 40px #b82a4450;
                border: 0;
                outline: none;
                cursor: pointer;
                transition: box-shadow 0.2s ease-out;
            }

            #button:hover,
            #button:focus {
                box-shadow: 0 2px 4px #b82a4480, 0 20px 48px #b82a4460,
                    0 16px 40px #b82a4460;
            }
            #title {
                font-family: 'Noto Sans SC', sans-serif;
                color: #fff;
                margin: 0;
                font-size: 21px;
            }

            #overlay {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 0;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.2);
            }

            @keyframes play {
                from {
                    width: 0;
                }

                to {
                    width: 100%;
                }
            }

            @keyframes fade-out {
                from {
                    width: 100%;
                    opacity: 1;
                }

                to {
                    width: 100%;
                    opacity: 0;
                }
            }
        `
    }

    render() {
        return html`
            <button id="button" @click="${this.play}">
                <p id="title">
                    <slot></slot>
                </p>
                <div
                    id="overlay"
                    style=${this.isPlaying
                        ? `animation: play ${this.time}s 0s 1 ease-out, fade-out .75s ${this.time}s 1 ease-out;`
                        : ''}
                />
            </button>
            <audio id="sound" preload="metadata">
                <source src="/sound/calliope/${this.src}" type="audio/mpeg" />
            </audio>
        `
    }
}

// korone
@customElement('korone-button')
export class KoroneButton extends LitElement {
    @property({ type : 'string'})
    src = ''

    @property({ type : 'number'})
    time = 2

    @internalProperty()
    isPlaying = false

    play() {
        requestAnimationFrame(() => {this.isPlaying = true})

        if (this.isPlaying) this.isPlaying = false

        let sound = this.shadowRoot?.getElementById('sound') as HTMLAudioElement

        sound.pause()
        sound.currentTime = 0
        sound.play()

        sound.onplaying = () => {
            setTimeout(() => {
                this.isPlaying = false
            }, this.time * 1000 + 750)

            if ('mediaSession' in navigator) {
                // @ts-ignore
                navigator.mediaSession.setActionHandler('play', () =>
                    sound.play()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('pause', () =>
                    sound.pause()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekbackward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekforward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'previoustrack',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('nexttrack', () => null)
            }
        }
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                justify-content: center;
                margin: 20px 0;
            }

            #sound {
                display: none;
            }

            #button {
                position: relative;
                display: flex;
                flex-direction: row;
                appearance: none;
                -webkit-appearance: none;
                padding: 12px 32px;
                border-radius: 4px;
                background-color: #a24a42;
                box-shadow: 0 2px 4px #a24a4270, 0 4px 16px #a24a4250,
                    0 16px 40px #a24a4250;
                border: 0;
                outline: none;
                cursor: pointer;
                transition: box-shadow 0.2s ease-out;
            }

            #button:hover,
            #button:focus {
                box-shadow: 0 2px 4px #a24a4280, 0 20px 48px #a24a4260,
                    0 16px 40px #a24a4260;
            }
            #title {
                font-family: 'Noto Sans SC', sans-serif;
                color: #fff;
                margin: 0;
                font-size: 21px;
            }

            #overlay {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 0;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.2);
            }

            @keyframes play {
                from {
                    width: 0;
                }

                to {
                    width: 100%;
                }
            }

            @keyframes fade-out {
                from {
                    width: 100%;
                    opacity: 1;
                }

                to {
                    width: 100%;
                    opacity: 0;
                }
            }
        `
    }

    render() {
        return html`
            <button id="button" @click="${this.play}">
                <p id="title">
                    <slot></slot>
                </p>
                <div
                    id="overlay"
                    style=${this.isPlaying
                        ? `animation: play ${this.time}s 0s 1 ease-out, fade-out .75s ${this.time}s 1 ease-out;`
                        : ''}
                />
            </button>
            <audio id="sound" preload="metadata">
                <source src="/sound/korone/${this.src}" type="audio/mpeg" />
            </audio>
        `
    }
}

// Hachama

@customElement('haachama-button')
export class HaachamaButton extends LitElement {
    @property({ type : 'string'})
    src = ''

    @property({ type : 'number'})
    time = 2

    @internalProperty()
    isPlaying = false

    play() {
        requestAnimationFrame(() => {this.isPlaying = true})

        if (this.isPlaying) this.isPlaying = false

        let sound = this.shadowRoot?.getElementById('sound') as HTMLAudioElement

        sound.pause()
        sound.currentTime = 0
        sound.play()

        sound.onplaying = () => {
            setTimeout(() => {
                this.isPlaying = false
            }, this.time * 1000 + 750)

            if ('mediaSession' in navigator) {
                // @ts-ignore
                navigator.mediaSession.setActionHandler('play', () =>
                    sound.play()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('pause', () =>
                    sound.pause()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekbackward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekforward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'previoustrack',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('nexttrack', () => null)
            }
        }
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                justify-content: center;
                margin: 20px 0;
            }

            #sound {
                display: none;
            }

            #button {
                position: relative;
                display: flex;
                flex-direction: row;
                appearance: none;
                -webkit-appearance: none;
                padding: 12px 32px;
                border-radius: 4px;
                background-color: #fecde1;
                box-shadow: 0 2px 4px #fecde170, 0 4px 16px #fecde150,
                    0 16px 40px #fecde150;
                border: 0;
                outline: none;
                cursor: pointer;
                transition: box-shadow 0.2s ease-out;
            }

            #button:hover,
            #button:focus {
                box-shadow: 0 2px 4px #fecde180, 0 20px 48px #fecde160,
                    0 16px 40px #fecde160;
            }
            #title {
                font-family: 'Noto Sans SC', sans-serif;
                color: #fff;
                margin: 0;
                font-size: 21px;
            }

            #overlay {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 0;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.2);
            }

            @keyframes play {
                from {
                    width: 0;
                }

                to {
                    width: 100%;
                }
            }

            @keyframes fade-out {
                from {
                    width: 100%;
                    opacity: 1;
                }

                to {
                    width: 100%;
                    opacity: 0;
                }
            }
        `
    }

    render() {
        return html`
            <button id="button" @click="${this.play}">
                <p id="title">
                    <slot></slot>
                </p>
                <div
                    id="overlay"
                    style=${this.isPlaying
                        ? `animation: play ${this.time}s 0s 1 ease-out, fade-out .75s ${this.time}s 1 ease-out;`
                        : ''}
                />
            </button>
            <audio id="sound" preload="metadata">
                <source src="/sound/haachama/${this.src}" type="audio/mpeg" />
            </audio>
        `
    }
}

// Fubuki

@customElement('fubuki-button')
export class FubukiButton extends LitElement {
    @property({ type : 'string'})
    src = ''

    @property({ type : 'number'})
    time = 2

    @internalProperty()
    isPlaying = false

    play() {
        requestAnimationFrame(() => {this.isPlaying = true})

        if (this.isPlaying) this.isPlaying = false

        let sound = this.shadowRoot?.getElementById('sound') as HTMLAudioElement

        sound.pause()
        sound.currentTime = 0
        sound.play()

        sound.onplaying = () => {
            setTimeout(() => {
                this.isPlaying = false
            }, this.time * 1000 + 750)

            if ('mediaSession' in navigator) {
                // @ts-ignore
                navigator.mediaSession.setActionHandler('play', () =>
                    sound.play()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('pause', () =>
                    sound.pause()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekbackward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekforward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'previoustrack',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('nexttrack', () => null)
            }
        }
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                justify-content: center;
                margin: 20px 0;
            }

            #sound {
                display: none;
            }

            #button {
                position: relative;
                display: flex;
                flex-direction: row;
                appearance: none;
                -webkit-appearance: none;
                padding: 12px 32px;
                border-radius: 4px;
                background-color: #9cd0f1;
                box-shadow: 0 2px 4px #9cd0f170, 0 4px 16px #9cd0f150,
                    0 16px 40px #9cd0f150;
                border: 0;
                outline: none;
                cursor: pointer;
                transition: box-shadow 0.2s ease-out;
            }

            #button:hover,
            #button:focus {
                box-shadow: 0 2px 4px #9cd0f180, 0 20px 48px #9cd0f160,
                    0 16px 40px #9cd0f160;
            }
            #title {
                font-family: 'Noto Sans SC', sans-serif;
                color: #fff;
                margin: 0;
                font-size: 21px;
            }

            #overlay {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 0;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.2);
            }

            @keyframes play {
                from {
                    width: 0;
                }

                to {
                    width: 100%;
                }
            }

            @keyframes fade-out {
                from {
                    width: 100%;
                    opacity: 1;
                }

                to {
                    width: 100%;
                    opacity: 0;
                }
            }
        `
    }

    render() {
        return html`
            <button id="button" @click="${this.play}">
                <p id="title">
                    <slot></slot>
                </p>
                <div
                    id="overlay"
                    style=${this.isPlaying
                        ? `animation: play ${this.time}s 0s 1 ease-out, fade-out .75s ${this.time}s 1 ease-out;`
                        : ''}
                />
            </button>
            <audio id="sound" preload="metadata">
                <source src="/sound/fubuki/${this.src}" type="audio/mpeg" />
            </audio>
        `
    }
}

// Matsuri

@customElement('matsuri-button')
export class MatsuriButton extends LitElement {
    @property({ type : 'string'})
    src = ''

    @property({ type : 'number'})
    time = 2

    @internalProperty()
    isPlaying = false

    play() {
        requestAnimationFrame(() => {this.isPlaying = true})

        if (this.isPlaying) this.isPlaying = false

        let sound = this.shadowRoot?.getElementById('sound') as HTMLAudioElement

        sound.pause()
        sound.currentTime = 0
        sound.play()

        sound.onplaying = () => {
            setTimeout(() => {
                this.isPlaying = false
            }, this.time * 1000 + 750)

            if ('mediaSession' in navigator) {
                // @ts-ignore
                navigator.mediaSession.setActionHandler('play', () =>
                    sound.play()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('pause', () =>
                    sound.pause()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekbackward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekforward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'previoustrack',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('nexttrack', () => null)
            }
        }
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                justify-content: center;
                margin: 20px 0;
            }

            #sound {
                display: none;
            }

            #button {
                position: relative;
                display: flex;
                flex-direction: row;
                appearance: none;
                -webkit-appearance: none;
                padding: 12px 32px;
                border-radius: 4px;
                background-color: #7a6e70;
                box-shadow: 0 2px 4px #7a6e7070, 0 4px 16px #7a6e7050,
                    0 16px 40px #7a6e7050;
                border: 0;
                outline: none;
                cursor: pointer;
                transition: box-shadow 0.2s ease-out;
            }

            #button:hover,
            #button:focus {
                box-shadow: 0 2px 4px #7a6e7080, 0 20px 48px #7a6e7060,
                    0 16px 40px #7a6e7060;
            }
            #title {
                font-family: 'Noto Sans SC', sans-serif;
                color: #fff;
                margin: 0;
                font-size: 21px;
            }

            #overlay {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 0;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.2);
            }

            @keyframes play {
                from {
                    width: 0;
                }

                to {
                    width: 100%;
                }
            }

            @keyframes fade-out {
                from {
                    width: 100%;
                    opacity: 1;
                }

                to {
                    width: 100%;
                    opacity: 0;
                }
            }
        `
    }

    render() {
        return html`
            <button id="button" @click="${this.play}">
                <p id="title">
                    <slot></slot>
                </p>
                <div
                    id="overlay"
                    style=${this.isPlaying
                        ? `animation: play ${this.time}s 0s 1 ease-out, fade-out .75s ${this.time}s 1 ease-out;`
                        : ''}
                />
            </button>
            <audio id="sound" preload="metadata">
                <source src="/sound/matsuri/${this.src}" type="audio/mpeg" />
            </audio>
        `
    }
}

// Uto

@customElement('uto-button')
export class UtoButton extends LitElement {
    @property({ type : 'string'})
    src = ''

    @property({ type : 'number'})
    time = 2

    @internalProperty()
    isPlaying = false

    play() {
        requestAnimationFrame(() => {this.isPlaying = true})

        if (this.isPlaying) this.isPlaying = false

        let sound = this.shadowRoot?.getElementById('sound') as HTMLAudioElement

        sound.pause()
        sound.currentTime = 0
        sound.play()

        sound.onplaying = () => {
            setTimeout(() => {
                this.isPlaying = false
            }, this.time * 1000 + 750)

            if ('mediaSession' in navigator) {
                // @ts-ignore
                navigator.mediaSession.setActionHandler('play', () =>
                    sound.play()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('pause', () =>
                    sound.pause()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekbackward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekforward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'previoustrack',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('nexttrack', () => null)
            }
        }
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                justify-content: center;
                margin: 20px 0;
            }

            #sound {
                display: none;
            }

            #button {
                position: relative;
                display: flex;
                flex-direction: row;
                appearance: none;
                -webkit-appearance: none;
                padding: 12px 32px;
                border-radius: 4px;
                background-color: #dcedf7;
                box-shadow: 0 2px 4px #dcedf770, 0 4px 16px #dcedf750,
                    0 16px 40px #dcedf750;
                border: 0;
                outline: none;
                cursor: pointer;
                transition: box-shadow 0.2s ease-out;
            }

            #button:hover,
            #button:focus {
                box-shadow: 0 2px 4px #dcedf780, 0 20px 48px #dcedf760,
                    0 16px 40px #dcedf60;
            }
            #title {
                font-family: 'Noto Sans SC', sans-serif;
                color: #fff;
                margin: 0;
                font-size: 21px;
            }

            #overlay {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 0;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.2);
            }

            @keyframes play {
                from {
                    width: 0;
                }

                to {
                    width: 100%;
                }
            }

            @keyframes fade-out {
                from {
                    width: 100%;
                    opacity: 1;
                }

                to {
                    width: 100%;
                    opacity: 0;
                }
            }
        `
    }

    render() {
        return html`
            <button id="button" @click="${this.play}">
                <p id="title">
                    <slot></slot>
                </p>
                <div
                    id="overlay"
                    style=${this.isPlaying
                        ? `animation: play ${this.time}s 0s 1 ease-out, fade-out .75s ${this.time}s 1 ease-out;`
                        : ''}
                />
            </button>
            <audio id="sound" preload="metadata">
                <source src="/sound/uto/${this.src}" type="audio/mpeg" />
            </audio>
        `
    }
}

// Coco

@customElement('coco-button')
export class CocoButton extends LitElement {
    @property({ type : 'string'})
    src = ''

    @property({ type : 'number'})
    time = 2

    @internalProperty()
    isPlaying = false

    play() {
        requestAnimationFrame(() => {this.isPlaying = true})

        if (this.isPlaying) this.isPlaying = false

        let sound = this.shadowRoot?.getElementById('sound') as HTMLAudioElement

        sound.pause()
        sound.currentTime = 0
        sound.play()

        sound.onplaying = () => {
            setTimeout(() => {
                this.isPlaying = false
            }, this.time * 1000 + 750)

            if ('mediaSession' in navigator) {
                // @ts-ignore
                navigator.mediaSession.setActionHandler('play', () =>
                    sound.play()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('pause', () =>
                    sound.pause()
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekbackward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'seekforward',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler(
                    'previoustrack',
                    () => null
                )

                // @ts-ignore
                navigator.mediaSession.setActionHandler('nexttrack', () => null)
            }
        }
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                justify-content: center;
                margin: 20px 0;
            }

            #sound {
                display: none;
            }

            #button {
                position: relative;
                display: flex;
                flex-direction: row;
                appearance: none;
                -webkit-appearance: none;
                padding: 12px 32px;
                border-radius: 4px;
                background-color: #ff8753;
                box-shadow: 0 2px 4px #ff875370, 0 4px 16px #ff875350,
                    0 16px 40px #ff875350;
                border: 0;
                outline: none;
                cursor: pointer;
                transition: box-shadow 0.2s ease-out;
            }

            #button:hover,
            #button:focus {
                box-shadow: 0 2px 4px #ff875380, 0 20px 48px #ff875360,
                    0 16px 40px #ff875360;
            }
            #title {
                font-family: 'Noto Sans SC', sans-serif;
                color: #fff;
                margin: 0;
                font-size: 21px;
            }

            #overlay {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 0;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.2);
            }

            @keyframes play {
                from {
                    width: 0;
                }

                to {
                    width: 100%;
                }
            }

            @keyframes fade-out {
                from {
                    width: 100%;
                    opacity: 1;
                }

                to {
                    width: 100%;
                    opacity: 0;
                }
            }
        `
    }

    render() {
        return html`
            <button id="button" @click="${this.play}">
                <p id="title">
                    <slot></slot>
                </p>
                <div
                    id="overlay"
                    style=${this.isPlaying
                        ? `animation: play ${this.time}s 0s 1 ease-out, fade-out .75s ${this.time}s 1 ease-out;`
                        : ''}
                />
            </button>
            <audio id="sound" preload="metadata">
                <source src="/sound/coco/${this.src}" type="audio/mpeg" />
            </audio>
        `
    }
}