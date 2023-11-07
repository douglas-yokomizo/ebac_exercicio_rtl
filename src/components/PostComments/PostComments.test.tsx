import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários', () => {
        render(<PostComment />);
        const textArea = screen.getByTestId('comment-textarea')

        // Aqui ele simula uma mudança no campo de texto
        fireEvent.change(textArea, {
            target: {
                value: 'Comentário 1'
            }
        });
        // E aqui ele simula um click no botão Comentar
        fireEvent.click(screen.getByTestId('comment-button'));

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário 2'
            }
        });

        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getAllByTestId('comment-count')).toHaveLength(2)
    })
});