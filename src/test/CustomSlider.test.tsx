import React from 'react'
import CustomSlider from '../components/customSlider/CustomSlider'
import { fireEvent, render, screen } from '@testing-library/react'

describe('CustomSlider test', () => {
    let slider = null
    let spinbutton = null
    let sliderComponent = null

    beforeEach(() => {
        render(<CustomSlider />)
        slider = screen.getByRole('slider')
        spinbutton = screen.getByRole('spinbutton')
        sliderComponent = screen.getByTestId('sliderComponent')
    })

    test('render component', () => {
        expect(slider)
    })

    test('change volume value', () => {
        fireEvent.change(spinbutton, { target: { value: 50 } })
        expect(spinbutton.value).toContain('50')
    })

    test('handle blur on volume change', () => {
        fireEvent.change(spinbutton, { target: { value: -1 } })
        fireEvent.blur(spinbutton)
        expect(spinbutton.value).toContain('0')

        fireEvent.change(spinbutton, { target: { value: 101 } })
        fireEvent.blur(spinbutton)
        expect(spinbutton.value).toContain('100')
    })

    test('handle change slider', async () => {
        const startPosition = { clientX: 415, clientY: 568 }

        fireEvent.mouseEnter(sliderComponent, startPosition)
        fireEvent.mouseOver(sliderComponent, startPosition)
        fireEvent.mouseMove(sliderComponent, startPosition)
        fireEvent.mouseDown(sliderComponent, startPosition)

        expect(spinbutton.value).toContain('100')

        fireEvent.change(spinbutton, { target: { value: 50 } })
        expect(spinbutton.value).toContain('50')
    })

    test('change volume empty value', () => {
        fireEvent.change(spinbutton, { target: { value: '' } })
        expect(spinbutton.value).toContain('')
    })
})
