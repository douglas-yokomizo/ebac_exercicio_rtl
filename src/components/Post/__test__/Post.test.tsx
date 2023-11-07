import { render, screen } from '@testing-library/react'
import Post from "..";

describe('Testes para o componente Post', () => {
    it('Deve renderizar uma imagem', () => {
        render(<Post children='' imageUrl='' />);
        expect(screen.getByTestId('imagem')).toBeInTheDocument()
    })
})