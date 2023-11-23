/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import javax.swing.table.AbstractTableModel;
import model.Task;

/**
 *
 * @author ana
 */
public class TaskTableModel extends AbstractTableModel {
    
    String[] columns = {"Nome", "Descrição", "Prazo", "Tarefa concluída", "Editar", "Excluir"};
    List<Task> tasks = new ArrayList();

    @Override
    public int getRowCount() {
        return tasks.size();
    }

    @Override
    public String getColumnName(int columnIndex) {
        return columns[columnIndex];
    }
    
    // habilitando edição na coluna de índice 3 (Tarefa concluída)
    public boolean isCellEditable(int rowIndex, int columnIndex) {
//        if(columnIndex == 3)
//            return true;
//        else
//            return false;

        return columnIndex == 3;
    }

    @Override
    public int getColumnCount() {
        return columns.length;
    }
    
    @Override
    public Class<?> getColumnClass(int columnIndex) {
        /*
         * O método verifica se a lista tasks está vazia. Se estiver, ele
         * retorna Object.class. Isso é um caso de fallback quando não
         * há tarefas no modelo e a classe da coluna não está bem definida.
         */
        if(tasks.isEmpty()) {
            return Object.class;
        }
        /*
         * Se a lista tasks não estiver vazia, o método chama this.getValueAt(0, columnIndex) 
         * para obter o valor na célula especificada (linha 0, índice da coluna). Em seguida, 
         * ele obtém a classe desse valor usando o método getClass().
        */
        return this.getValueAt(0, columnIndex).getClass();
    } 
    
    @Override
    public Object getValueAt(int rowIndex, int columnIndex) {
        
        switch(columnIndex) {
            case 0:
                return tasks.get(rowIndex).getName();
            case 1:
                return tasks.get(rowIndex).getDescription();
            case 2:
                SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
                return dateFormat.format(tasks.get(rowIndex).getDeadline());
            case 3:
                return tasks.get(rowIndex).isIsCompleted();
            case 4:
                return "";
            case 5:
                return "";
            default:    
                return "Dados não encontrados";
        }
    }
    
    @Override
    public void setValueAt(Object aValue, int rowIndex, int columnIndex) {
        
        /*
         * O método usa o rowIndex para acessar a lista de tarefas (tasks) e 
         * obter a tarefa na linha correspondente.
         * Em seguida, chama o método setIsCompleted na tarefa, passando o novo
         * valor (aValue) como um booleano. 
        */
        tasks.get(rowIndex).setIsCompleted((boolean) aValue);
    }

    public String[] getColumns() {
        return columns;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
    
}
