/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package util;

import java.awt.Color;
import java.awt.Component;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.swing.JLabel;
import javax.swing.JTable;
import javax.swing.table.DefaultTableCellRenderer;
import model.Task;

/**
 *
 * @author ana
 */
public class DeadlineColumnCellRenderer extends DefaultTableCellRenderer {

    @Override
    public Component getTableCellRendererComponent(JTable table, Object value,
            boolean isSelected, boolean hasFocus, int row, int col) {

        // As células são renderizadas por padrão como JLabel
        JLabel label;
        label = (JLabel) super.getTableCellRendererComponent(table, value,
                isSelected, hasFocus, row, col);

        // Centralizando o conteúdo das células
        label.setHorizontalAlignment(JLabel.CENTER);

        /*
         * Obtenção do Modelo da Tabela:
         * essa linha obtém o modelo da tabela associado à instância 'table'. 
         */
        TaskTableModel taskModel = (TaskTableModel) table.getModel();
        /*
         * Acesso à Tarefa com Base no Índice da Linha:
         * acessando a lista de tarefas ('getTasks()') do modelo e, em seguida, 
         * obtendo uma tarefa específica com base no índice de linha 'row'.
         */
        Task task = taskModel.getTasks().get(row);


        /*
         * Implementação para comparar apenas as datas, 
         * ignorando informações de tempo:     
         */
        Date currentDate = new Date();
        Date currentDateWithoutTime;

        // Configurando o formato para considerar apenas a parte da data
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");

        try {
            currentDateWithoutTime = dateFormat.parse(dateFormat.format(currentDate));
        } catch (ParseException e) {
            // Em caso de erro, use a data atual com tempo completo
            currentDateWithoutTime = currentDate;
        }

        
        Date deadline = task.getDeadline();

        float alpha = 0.5f; // Valor de transparência (0.0f - totalmente transparente, 1.0f - totalmente opaco)
        
        // Customizando o background das células
        if (deadline.after(currentDateWithoutTime)) {
            label.setBackground(new Color(0, 255, 0, Math.round(alpha * 255))); // Verde com transparência
        } else if (deadline.before(currentDateWithoutTime)) {
            label.setBackground(new Color(255, 0, 0, Math.round(alpha * 255))); // Vermelho com transparência
        } else {
            label.setBackground(new Color(255, 255, 0, Math.round(alpha * 255))); // Amarelo com transparência
        }
        
        return label;
    }

}
