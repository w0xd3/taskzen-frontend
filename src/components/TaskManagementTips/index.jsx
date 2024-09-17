import React from 'react';

export default function index(){
  const tips = [
    {
      title: '任务拆分',
      description: '把大任务拆解成更细化的小任务，每个任务都具备明确的目标和时间段。例如，如果有多个任务需要完成，可以按优先级和所需时间安排，逐一处理。',
    },
    {
      title: '专注处理单任务',
      description: '按照 "单任务工作法"（Single Tasking），一次专注处理一件事，可以提高效率和质量。比如使用番茄工作法，安排25分钟专注时间，然后休息5分钟。',
    },
    {
      title: '任务顺序和时间安排',
      description: '安排任务的顺序时，可以根据任务的紧急性和重要性进行排序。可以先处理时间敏感或耗时较短的任务，再处理复杂的大任务。',
    },
    {
      title: '适度休息',
      description: '在长时间工作后，适当的休息可以帮助恢复注意力和提高生产力。遵循工作 90 分钟后休息 10-15 分钟的原则，有助于保持高效的工作状态。',
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>时间管理和任务安排建议</h1>
      <div style={styles.tipsContainer}>
        {tips.map((tip, index) => (
          <div key={index} style={styles.tipCard}>
            <h2 style={styles.tipTitle}>{tip.title}</h2>
            <p style={styles.tipDescription}>{'\u00A0\u00A0\u00A0\u00A0'}{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '30px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
      color: '#000000', // 标题黑色
      fontSize: '22px', // 字体调小
      marginBottom: '20px',
      fontWeight: 'bold', // 加粗标题
    },
    tipsContainer: {
      display: 'grid', // 使用grid布局
      gridTemplateColumns: 'repeat(2, 1fr)', // 两列布局
      gap: '4%',
    },
    tipCard: {
      border: '1px solid #E0E0E0',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: '#F5F5F5', // 淡灰背景
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    tipTitle: {
      color: '#000000', // 标题黑色
      fontSize: '18px', // 字体调小
      marginBottom: '10px',
      fontWeight: 'bold', // 标题加粗
    },
    tipDescription: {
      fontSize: '14px', // 字体调小
      lineHeight: '1.4',
      color: '#000000', // 正文黑色
      textAlign:'left'
    },
  };
