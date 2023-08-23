import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/components/CounterApp";

describe('Pruebas sobre el elemento <App />', () => {
    const initialValue = 10

    test('deberia hacer match con el snapshot', () => {
        const { container } = render(<CounterApp />)
        expect(container).toMatchSnapshot()
    });

    test('deberia validar que el valor inicial del contador sea 10', () => {
        render(<CounterApp value={initialValue}/>)        
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(`${initialValue}`)
    });
    
    test('deberia incrementar el contador en +1', () => {
        render(<CounterApp value={initialValue}/>)        
        fireEvent.click(screen.getByTestId('btnincrement'))    
        expect(screen.getByLabelText('contador').innerHTML).toContain(`${initialValue + 1}`)
    });
    
    test('deberia decrementar el contador en -1', () => {
        render(<CounterApp value={initialValue}/>)        
        fireEvent.click(screen.getByTestId('btndecrement'))    
        expect(screen.getByLabelText('contador').innerHTML).toContain(`${initialValue - 1}`)
    });
    
    test('deberia reiniciar el contador al valor por defecto', () => {
        render(<CounterApp value={initialValue}/>)        
        fireEvent.click(screen.getByTestId('btnreset'))    
        expect(screen.getByLabelText('contador').innerHTML).toContain(`${initialValue}`)        
    });
})