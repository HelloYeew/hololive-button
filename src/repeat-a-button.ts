import { LitElement, html, css } from 'lit-element'
import { customElement, internalProperty, property } from 'lit-element/lib/decorators'

@customElement('repeat-button')
export class RepeatAButton extends LitElement {
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
        sound.loop = true

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
                background-color: #d4af37;
                box-shadow: 0 2px 4px #d4af3770, 0 4px 16px #d4af3750,
                    0 16px 40px #d4af3750;
                border: 0;
                outline: none;
                cursor: pointer;
                transition: box-shadow 0.2s ease-out;
            }

            #button:hover,
            #button:focus {
                box-shadow: 0 2px 4px #d4af3780, 0 20px 48px #d4af3760,
                    0 16px 40px #d4af3760;
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
                <source src="/sound/repeat/${this.src}" type="audio/mpeg" />
            </audio>
        `
    }
}