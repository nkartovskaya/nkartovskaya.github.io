/*�������� ���������, ��������� ������, ���������� ������� 8�8,
� ������� ����� ����������� ��������� ����� ������.
�� ������ ������� ���� ������, ���� #. � ���������� ������ ����������
��������� �����.

 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 */
for (i=0; i<=8; i++) {
    for (j=0; j<=8; j++) {
        if (j%2==0) {
            console.log('#');
        } else {
            console.log(' ');
        }
    }
}