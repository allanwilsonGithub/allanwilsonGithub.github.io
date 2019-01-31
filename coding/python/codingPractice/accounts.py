import datetime
import pytz


class Account:
    """ Simple account class with balance"""

    @staticmethod
    def _current_time():
        utc_time = datetime.datetime.utcnow()
        return pytz.utc.localize(utc_time)

    def __init__(self, name, balance):
        self._name = name
        self._balance = balance
        self._transaction_list = []
        print("Account created for " + self._name)
        self._transaction_list.append(("Account opened with " + str(balance) + " on " + str(Account._current_time())))

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            self.show_balance()
            self._transaction_list.append((Account._current_time(), amount))

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            self._transaction_list.append((Account._current_time(), -amount))
        else:
            print("The amount should be greater than 0 and less than your account balance")
        self.show_balance()

    def show_balance(self):
        print("Balance is {}".format(self._balance))

    def show_transactions(self):
        print(self._transaction_list[0])
        for date, amount in self._transaction_list[1:]:
            if amount > 0:
                tran_type = "deposited"
            else:
                tran_type = "withdrawn"
                amount *= -1
            print("{:6} {} on {} (local time was {})".format(amount, tran_type, date, date.astimezone()))


if __name__ == '__main__':
    tim = Account("Tim", 0)
    tim.show_balance()

    tim.deposit(1000)
    tim.withdraw(200)
    tim.show_balance()
    tim.show_transactions()

    steph = Account("Steph", 100)
    steph.deposit(100)
    steph.withdraw(200)
    steph.show_transactions()
