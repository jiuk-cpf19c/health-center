from django.db import models
from products.models import Product

class Order(models.Model):
    name = models.CharField(max_length=100)  # 받는사람
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.CharField(max_length=200)
    address_detail = models.CharField(max_length=200, blank=True)
    message = models.CharField(max_length=200, blank=True)

    payment_method = models.CharField(max_length=20, choices=[
        ('bank', '무통장입금'),
        ('card', '카드결제'),
        ('virtual', '가상계좌'),
    ])

    total_price = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.created_at.strftime('%Y-%m-%d')}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveIntegerField()
    price = models.PositiveIntegerField()  # 주문 당시 가격 (변동 대비)

    def __str__(self):
        return f"{self.product.name} x {self.quantity}"
